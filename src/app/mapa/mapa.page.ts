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

  

  constructor(private menu: MenuController) {
    
   }

  openEnd() {
    this.menu.open('end');
  }



  ngOnInit() {
  }
}




  //adadadadad

  