import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  mapa: any;
  meuInput: any;

  constructor(private menu: MenuController) { }

  openEnd() {
    this.menu.open('end');
  }



  ngOnInit() {
  }

  adiciona() {
    this.mapa.add(this.inputTexto);
    this.inputTexto="";
    this.meuInput.setFocus();
  }
  inputTexto(inputTexto: any) {
    throw new Error('Method not implemented.');
  }

  remover(indice) {
    this.mapa.remove(indice);
  }







  //adadadadad

  
  export   class mapa{

    private minhaLista;
  
    public getLista(){
      return this.minhaLista;
    }
  
    public setLista(lista){
       this.minhaLista=lista;
    }
  
    constructor(private http:HttpClient, 
                public toastController: ToastController) {
      this.atualizaLista()  
    }
  
    atualizaLista(){
      this.minhaLista=[] ;
      this.http.get<any[]>("http://localhost/api/consulta.php")
                .subscribe( dados => {
                   dados.forEach( item => {
                    this.minhaLista.push([item.codigo,item.descricao])
                   })
                })
    }
    
    async ngOnInit() {
      
    }
  
    public async add(valor) {
      this.http.get<any[]>("http://localhost/api/incluir.php?valor="+valor)
                .subscribe( dados => {
                  this.atualizaLista();
                  this.presentToast("Item incluido!");
                })
    }
  
    public async remove(indice) {
      this.http.get<any[]>("http://localhost/api/remover.php?codigo="+indice.toString())
                .subscribe( dados => {
                  this.atualizaLista();
                  this.presentToast("Item removido!");
                })
    }
    async presentToast(mens) {
      const toast = await this.toastController.create({
        message: mens,
        duration: 2000
      });
      toast.present();
    }
  
    public async limpar() {
      this.http.get<any[]>("http://localhost/api/limpar.php")
                .subscribe( dados => {
                  this.atualizaLista();
                  this.presentToast("Lista removida!");
                })
    }
    
}
