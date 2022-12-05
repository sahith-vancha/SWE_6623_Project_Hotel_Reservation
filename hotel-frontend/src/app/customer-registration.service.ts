import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {
  public doRegistration(customer: Customer) {
    return this.http.post
    ("http://localhost:8080/register",
    customer,{responseType:'text' as 'json'});
  }
 

  constructor(private http:HttpClient) { }
}
