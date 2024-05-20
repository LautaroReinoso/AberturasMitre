import { NgModule } from '@angular/core';


import {RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IniciarSesionComponent } from './layout/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
    {
      path:'',
      component: LayoutComponent,
      children: [
       // { path:'user', loadChildren: () => import('./modules/user/user.module').then(m => m.User.Module)},
       // { path:'user', loadChildren: () => import('./modules/admin/admin.module').then(m => m.Admin.Module)}
      ]
    },
    {
      path:'iniciar-sesion',
      component: IniciarSesionComponent,
    }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
