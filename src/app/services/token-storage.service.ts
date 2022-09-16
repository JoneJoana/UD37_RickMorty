import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private authService: AuthService) { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token: string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
    this.setRoles();
  }

  public getUser(): any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return {};
  }


  /*no localizo que pasa, pero en este punto falla i entra a err, por tanto no recupera el rol. en concreto:
  GEThttps://jmm-spring-api-h2-angular.herokuapp.com/users/GeeksHubs_2022 [HTTP/1.1 403  63ms] - no autorizado
 por tanto mnsaje err --> Couldn't find role information
  */
  public setRoles() {
    const user = this.getUser().replace(/['"]+/g, '');

    this.authService.findRole(user).subscribe(
      data => {
        window.sessionStorage.removeItem(ROLES_KEY);
        window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(data["role"]));
      },
      err => {
        console.log("Couldn't find role information" + err)
      }
    )
  }

  public getRoles() {
    return window.sessionStorage.getItem(ROLES_KEY);
  }

}
