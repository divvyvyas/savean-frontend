import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData: User;

  public width: number;
  public largeScreen: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.width = window.outerWidth;
    if (this.width < 599) {
      this.largeScreen = false;
    }
  }

  public user = this.fb.group({
    username: [''],
    password: ['']
  });

  report() {
    this.router.navigate(['/savean/register']);
  }

  submit() {
    let data: any = {};
    data = this.user.value;
    if(this.user.valid){
      this._authService.login(data).subscribe(
        data => this.userData = data,
        error => console.log(error),
        () => {
         this.router.navigate(['/savean/home']);
        }
      );
    }
  }

}
