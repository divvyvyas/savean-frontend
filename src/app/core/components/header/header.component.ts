import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(
    public router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this._authService.loggedIn() && (this.router.url == 'savean/login' || 'savean/register')){
      this.loggedIn = true;
    }
  }

  navigate(){
    this.router.navigate(['/']);
  }

  changePassword(){
    this.router.navigate(['/savean/home/change-password']);
  }

  logout(){
    this._authService.logout();
    this.router.navigate(['/savean/login']);
  }

}
