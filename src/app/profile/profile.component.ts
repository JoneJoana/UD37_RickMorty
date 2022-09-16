import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  roles: string | undefined;
  currentUserName: any;
  tokenUser : string | null | undefined;

  constructor(private token: TokenStorageService, private api: UserService) { }

  ngOnInit(): void {
    this.currentUserName = this.token.getUser();
    this.tokenUser = this.token.getToken();
    this.roles = this.token.getRoles()?.toString().replace(/['"]+/g, '');
  }

}
