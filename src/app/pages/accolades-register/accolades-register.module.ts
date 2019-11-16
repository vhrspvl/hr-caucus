import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccoladesRegisterPageRoutingModule } from './accolades-register-routing.module';

import { AccoladesRegisterPage } from './accolades-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccoladesRegisterPageRoutingModule
  ],
  declarations: [AccoladesRegisterPage]
})
export class AccoladesRegisterPageModule {}
