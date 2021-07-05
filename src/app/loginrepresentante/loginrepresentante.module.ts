import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginrepresentantePageRoutingModule } from './loginrepresentante-routing.module';

import { LoginrepresentantePage } from './loginrepresentante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginrepresentantePageRoutingModule
  ],
  declarations: [LoginrepresentantePage]
})
export class LoginrepresentantePageModule {}
