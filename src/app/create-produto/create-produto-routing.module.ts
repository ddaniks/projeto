import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProdutoPage } from './create-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProdutoPageRoutingModule {}
