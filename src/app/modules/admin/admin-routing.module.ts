import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      //{ path:'user', loadChildren: () => import().then()},
     // { path:'user', loadChildren: () => import().then()}
    ]
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
export class AdminRoutingModule { }
