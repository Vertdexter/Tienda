import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {HomeRoutinModule} from './home-routing.module'
import {FormsModule} from '@angular/forms'
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule, 
    SharedModule,
    HomeRoutinModule,
    FormsModule,
    MaterialModule, 
  ]
})
export class HomeModule { }
