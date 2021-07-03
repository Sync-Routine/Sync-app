import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogingerentePage } from './logingerente.page';

const routes: Routes = [
  {
    path: '',
    component: LogingerentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogingerentePageRoutingModule {}
