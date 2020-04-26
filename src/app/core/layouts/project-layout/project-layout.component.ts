import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent implements OnInit {

  public width: number;
  public xlSize: boolean = false;
  public lgSize: boolean = false;
  public loggedIn: boolean = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {

    if(this._authService.loggedIn()){
      this.loggedIn = true;
    }

    this.width = window.outerWidth;
    if (this.width > 599) {
      if (this.width > 1500) {
        this.xlSize = true;
       }
      else{
      this.lgSize = true;
      }
    }
  }

}
