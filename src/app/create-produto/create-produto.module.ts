import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProdutoPageRoutingModule } from './create-produto-routing.module';

import { CreateProdutoPage } from './create-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProdutoPageRoutingModule
  ],
  declarations: [CreateProdutoPage]
})
export class CreateProdutoPageModule {}
