import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private customerApi = "http://localhost:3000/customers";
  private productApi = "http://localhost:3000/product";


  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getCustomer() {
    return this.http.get(this.customerApi);

  }

  getProduct() {
    return this.http.get(this.productApi);
  }
}
