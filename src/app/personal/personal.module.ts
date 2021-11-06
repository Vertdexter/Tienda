import { NgModule } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';

import { CommonModule } from '@angular/common';
import {PersonalRoutinComponent} from './personal-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListaComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutinComponent,
    MaterialModule
  ]
})
export class PersonalModule { }
