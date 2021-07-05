import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginrepresentantePage } from './loginrepresentante.page';

const routes: Routes = [
  {
    path: '',
    component: LoginrepresentantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginrepresentantePageRoutingModule {}
