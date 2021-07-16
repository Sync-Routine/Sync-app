import { HttpClient } from '@angular/common/http';
import { removeSummaryDuplicates } from '@angular/compiler';
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

  minhaAgenda = ["katori gay"];
  inputTexto ="";
  adiciona() {
    this.minhaAgenda.push(this.inputTexto);
  }
  remover(indice) {
    this.minhaAgenda.splice(0,1);
  }
  constructor(private menu: MenuController) {
    
   }

  openEnd() {
    this.menu.open('end');
  }

  ngOnInit() {
  }
}

 

  //adadadadad

  