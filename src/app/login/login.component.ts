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
  username?: string;
  isLoggedIn = false;
  isLoginFailed = false;

  roles: string | undefined;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      const token = this.tokenStorage.getToken();
      this.username = JSON.stringify(user).replace(/['"]+/g, ''); // faig un regex per treure-li les cometes
      this.roles = this.tokenStorage.getRoles()?.toString().replace(/['"]+/g, '');
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
