import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url ="http://localhost:8000/user/signup"
  httpClient: any;
  constructor(private http: HttpClient) { }
  saveUser(data: any){
    return this.http.post(this.url,data);
  }
}
