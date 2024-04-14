import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-clientes',
    loadChildren: () => import('./lista-clientes/lista-clientes.module').then( m => m.ListaClientesPageModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
  {
    path: 'create-cliente',
    loadChildren: () => import('./create-cliente/create-cliente.module').then( m => m.CreateClientePageModule)
  },
  {
    path: 'create-produto',
    loadChildren: () => import('./create-produto/create-produto.module').then( m => m.CreateProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
