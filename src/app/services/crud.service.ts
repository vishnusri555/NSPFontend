import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpclient:HttpClient) { }
  baseUrl:String="http://localhost:8085/NSPRest/api";
  getStudents() {
    return this.httpclient.get(this.baseUrl + '/student')
  }
}
