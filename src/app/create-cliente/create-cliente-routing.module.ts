import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateClientePage } from './create-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CreateClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateClientePageRoutingModule {}
