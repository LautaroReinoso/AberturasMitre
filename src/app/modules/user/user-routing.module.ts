import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    //component: ,
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
export class UserRoutingModule { }
