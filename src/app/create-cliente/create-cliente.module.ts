import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateClientePageRoutingModule } from './create-cliente-routing.module';

import { CreateClientePage } from './create-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateClientePageRoutingModule
  ],
  declarations: [CreateClientePage]
})
export class CreateClientePageModule {}
