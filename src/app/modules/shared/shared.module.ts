import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../layout/head/nav/nav.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,

  ]
})
export class SharedModule { }
