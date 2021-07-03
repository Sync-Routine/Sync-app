import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogingerentePageRoutingModule } from './logingerente-routing.module';

import { LogingerentePage } from './logingerente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogingerentePageRoutingModule
  ],
  declarations: [LogingerentePage]
})
export class LogingerentePageModule {}
