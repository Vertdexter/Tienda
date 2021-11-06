import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../core/service/company/company.service';
import {Company} from '../../../company.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  company: Company[] = [];
  companyOne: Company;

  page = 1;
  pageSize = 4;
  CompanySize = this.company.length;

  constructor(
    private companyService: CompanyService,
  ) { }
 
  ngOnInit(): void {
      this.refresCompany()
      this.fetchCompany()
   }

    fetchCompany(){
      this.companyService.getAllCompany().subscribe(cos =>{
      this.company = cos;
      console.log(cos);
      
      });
      
    }
    fetchCompanyId(id: number){
     this.companyService.getOneCompany(id).subscribe(cos => {
        this.companyOne = cos
        console.log(this.companyOne);
      })      
    }

    refresCompany() {
      this.companyService.getAllCompany().subscribe(cos =>{
      this.company = cos
        .map((company, i) => ({id: i + 1, ...company}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      });
      }
}
