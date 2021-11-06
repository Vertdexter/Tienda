import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent, 
      children: [
        {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        },
        
        {
          path: 'home',
          loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'personal',
          loadChildren: ()=> import('./personal/personal.module').then(m => m.PersonalModule)
        },
        {
          path: 'company',
          loadChildren: ()=> import
                  ('./detailpersonal/components/company/company.component')
                                              .then(m => m.CompanyComponent )
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
