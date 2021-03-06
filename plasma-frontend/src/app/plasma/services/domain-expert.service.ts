

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Domainexpert} from '../tsclasses/domainexpert';

@Injectable({
  providedIn: 'root'
})
export class DomainExpertService {
  url: string;
  response: any;
  get: any;
  console: any;
constructor(private http: HttpClient) {
}
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
    getTheData() {
      return this.http.get('http://localhost:3000/data');
    }
    add(reg: Domainexpert) {
      this.url = 'http://13.234.94.77:8090/api/v1/search';
      // this.http.get(this.url + '').subscribe(resp => {
      //     console.log(resp);
      // this.response = resp;
      //     });
      // this.http.post(this.url + '', reg, {observe: 'response', responseType: 'text'});
      console.log(this.url , reg);
      return this.http
      .post(`${this.url}`, JSON.stringify(reg), this.httpOptions);
    }
}
