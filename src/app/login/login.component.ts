import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[]= [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = !!this.tokenStorage.getToken();;
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles)
    }
  }

  onSubmit(): void {
    const {username,password} = this.form;

    this.authService.login(username,password).subscribe(
      data => {
        this.tokenStorage.saveToken(data["token"]);
        this.tokenStorage.saveUser(this.form.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles; //getUser solo devuelve el nombre no el objeto user
        //console.log(this.roles) //undefined
        this.reloadPage();
      },
      error => {
        console.log(error)
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void{
    window.location.reload();
  }

}
