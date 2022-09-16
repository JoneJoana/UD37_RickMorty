import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T37_RickMorty';

  roles: string | undefined;
  isLoggedIn = false;
  username?: string;
  usernameView?: string;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router: Router){}

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      const token = this.tokenStorageService.getToken();
      this.username = user;
      this.roles = this.tokenStorageService.getRoles()?.toString().replace(/['"]+/g, '');
      this.usernameView = JSON.stringify(user).replace(/['"]+/g, '');
    }
  }

  logout(): void{
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = ''
    this.router.navigate(['/home']);
  }

}
