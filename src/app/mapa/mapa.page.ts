import { HttpClient } from '@angular/common/http';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { ListaService } from '../servicos/lista.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  mapa: any;
  meuInput: any;

  @ViewChild('input') myInput;

  
  inputTexto ="";

  listaService:ListaService;

  constructor(private menu: MenuController, private http:HttpClient, public toastController: ToastController) {
    this.listaService=new ListaService(http,toastController);   
   }

  adiciona() {
    this.listaService.add(this.inputTexto)
    this.inputTexto="";
    this.myInput.setFocus()
  }
  remover(indice) {
    this.listaService.remove(indice);
  }
  

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit() {
  }
}

 

  