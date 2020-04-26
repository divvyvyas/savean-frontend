import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { blankSpaceInputNotValid, noWhitespaceValidator, passwordMatchValidator } from 'src/app/core/utils/custom-validators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password-home',
  templateUrl: './change-password-home.component.html',
  styleUrls: ['./change-password-home.component.scss']
})
export class ChangePasswordHomeComponent implements OnInit {

  public localData: any;

  get CurrentPassword() {
    return this.changePassword.get('currentPassword');
  }
  get NewPassword() {
    return this.changePassword.get('newPassword');
  }
  get ConfirmNewPassword() {
    return this.changePassword.get('confirmNewPassword');
  }

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  changePassword = this.fb.group({
    currentPassword: ['', [Validators.required, blankSpaceInputNotValid, noWhitespaceValidator]],
    newPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
    confirmNewPassword: ['', [Validators.required]]
  }, { validator: passwordMatchValidator });

  ngOnInit(): void {
    this._authService.getData().subscribe(
      data => this.localData = data,
      error => console.log(error)
    );

  }

  submit() {
    let data: any = {};
    data = this.changePassword.value;
    delete data.confirmNewPassword;
    data.username = this.localData.username;
    if (this.changePassword.valid) {
      this._authService.changePassword(data).subscribe(
        data => {
          if (data) {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/savean/home/change-password']);
            }).then(() => this.snackBar.open('Password Updated Successfully', 'dismiss', { duration: 2000 }))
          }
          else {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/savean/home/change-password']);
            }).then(() => this.snackBar.open('Incorrect Credentials', 'dismiss', { duration: 2000 }))
          }
        },
        error => console.log(error)
      );
    }
  }

}
