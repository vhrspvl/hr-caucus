import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccoladesRegisterPage } from './accolades-register.page';

const routes: Routes = [
  {
    path: '',
    component: AccoladesRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccoladesRegisterPageRoutingModule {}
