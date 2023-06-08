import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../modesl/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../modesl/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "https://localhost:7171/api/Auth";
  constructor(
    private _http: HttpClient
  ) { }


  login(request: LoginRequest):Observable<LoginResponse>
  {
    return this._http.post<LoginResponse>(this.url, request);
  }


}
