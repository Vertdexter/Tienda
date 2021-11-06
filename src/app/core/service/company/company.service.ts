import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Company} from '../../../company.model'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCompany(){
    return this.http.get<Company[]>('http://localhost:3000/company');
  }

  getOneCompany(id:number){
    return this.http.get<Company>(`http://localhost:3000/company/${id}`)
  }
}
