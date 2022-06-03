import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-logingerente',
  templateUrl: './logingerente.page.html',
  styleUrls: ['./logingerente.page.scss'],
})

export class LogingerentePage implements OnInit {

  usuario:String="";
  senha:String="";

private api="http://localhost/api/";


  constructor(private menu: MenuController,private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  logar(){

    this.http.get<any[]>(this.api+"logar.php?usuario=" + this.usuario + "&senha=" + this.senha)
    .subscribe( dados=>{
      if(dados.length>0){
        this.router.navigate(['/mapa']);
      }
    })
  }

 registrar(){
  this.http.get<any[]>(this.api+"registrar.php?usuario=" + this.usuario + "&senha=" + this.senha)
  .subscribe( dados=>{
      this.router.navigate(['/home']);
  })
 }

  openEnd() {
    this.menu.open('end');
  }



}
