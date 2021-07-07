import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logingerente',
  templateUrl: './logingerente.page.html',
  styleUrls: ['./logingerente.page.scss'],
})
export class LogingerentePage implements OnInit {

  login:String="";
  senha:String="";
  logado="";

private api="https://localhost/api";


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }
  logar(){
    this.http.get<any[]>(this.api+"logar.php?usuario=" + this.login + "&senha=" + this.senha)
    .subscribe (dados=>{
      if(dados.length>0){
        this.logado=dados[0].nome;
        this.router.navigate(['/mapa']);
      })
     
  }



}
