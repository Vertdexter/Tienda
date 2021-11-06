import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CompanyService} from './service/company/company.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CompanyService
  ]
})
export class CoreModule { }
