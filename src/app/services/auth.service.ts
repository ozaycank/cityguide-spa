import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AlertifyServiceService } from './alertify-service.service';
import { RegisterUser } from '../models/registerUser';

// Define an interface for the response data
interface LoginResponse {
  tokenString: string;
  // Add other properties if they exist in the response
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private alertifyService: AlertifyServiceService) { }
  baseUrl = "https://localhost:7098/api/Auth/";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = "token";

  login(loginuser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");

    // Provide the type information for the response data
    this.httpClient.post<LoginResponse>(this.baseUrl + "login", loginuser, { headers: headers }).subscribe(data => {
      this.saveToken(data.tokenString); // Access 'tokenString' directly
      this.userToken = data.tokenString;
      this.decodedToken = this.jwtHelper.decodeToken(data.tokenString);
      this.router.navigateByUrl('/city');
      this.alertifyService.success("Logged in to the system");
    });
  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.baseUrl + "register", registerUser, { headers: headers }).subscribe(data => {

    });
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY)
  }
  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId() {
    const token = this.token; // Store the token value
  
    if (token) {
      return this.jwtHelper.decodeToken(token).nameid;
    } else {
      // Handle the case where the token is not available (e.g., user is not logged in)
      return null; // You can return null, or another appropriate value, like 'guest' or -1, depending on your requirements
    }
  }  
}
