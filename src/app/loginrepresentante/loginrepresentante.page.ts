import { Component, OnInit } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginrepresentante',
  templateUrl: './loginrepresentante.page.html',
  styleUrls: ['./loginrepresentante.page.scss'],
})
export class LoginrepresentantePage implements OnInit {

  
  usuario:String="";
  senha:String="";
  logado=false;
  private api="https://localhost/api/";  

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  logar(){
    this.http.get<any[]>(this.api+"logar.php?usuario=" + this.usuario + "&senha=" + this.senha)
    .subscribe( dados=>{
      if(dados.length>0){
        this.logado=dados[0].nome;
        this.router.navigate(['/mapa']);
      }
    })



  }
}
