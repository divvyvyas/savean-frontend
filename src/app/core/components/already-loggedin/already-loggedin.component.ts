import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-already-loggedin',
  templateUrl: './already-loggedin.component.html',
  styleUrls: ['./already-loggedin.component.scss']
})
export class AlreadyLoggedinComponent implements OnInit {

  public width: number;
  public largeScreen: boolean = true;

  public localData: any;
  public loggedIn: boolean = false;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this._authService.loggedIn()){
      this.loggedIn = true;
    }

    this._authService.getData().subscribe(
      data => this.localData = data,
      error => console.log(error)
    );

    this.width = window.outerWidth;
    if (this.width < 599) {
      this.largeScreen = false;
    }
  }

  continueAs(){
    this.router.navigate(['/savean/home']);
  }

  cancel(){
    this._authService.logout();
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/savean/login']);
    }).then(() => this.snackBar.open('Logged Out Sucessfully', 'dismiss', { duration: 2000 }))
  }

}
