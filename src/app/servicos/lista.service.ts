import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private minhaAgenda = [];

   public getLista(){
    return this.minhaAgenda;
  }

  public setLista(lista){
    this.minhaAgenda=lista;
  }

  constructor(private http:HttpClient){
    this.atualizadaLista()
  }
   
  atualizadaLista(){
    this.minhaAgenda=[] ;
    this.http.get<any[]>("https://localhost/api/consulta.php")
    .subscribe( dados=>{
      dados.forEach item=>{
       this.minhaAgenda.push([item.descricao])
      }})
  }

  public add(valor) {
    this.minhaAgenda.push(valor);
  }
  public excluir(indice) {
    this.minhaAgenda.splice(indice,1);
  }

public async kekw(valor){

  await this.atualizadaLista();
}

}
