import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/core/services/report.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Report } from 'src/app/shared/models/report';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public otp: boolean = false;

  public latitude: number;
  public longitude: number;
  public zoom: number;

  public width: number;
  public largeScreen: boolean = true;

  public filedata: File = null;
  public reportRes: Report;

  get Email() {
    return this.report.get('email');
  }
  get Name() {
    return this.report.get('name');
  }
  get File() {
    return this.report.get('file');
  }
  get Message() {
    return this.report.get('message');
  }
  get Otp() {
    return this.report.get('otp');
  }

  constructor(
    private router: Router,
    private reportService: ReportService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.width = window.outerWidth;
    if (this.width < 599) {
     this.largeScreen = false;
    }

    this.reportService.getPosition().subscribe(
      data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        this.zoom = 15;
      },
      error => console.log(error)
    );
  }

  public report = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.pattern("[A-Za-z ]+")]],
    file: ['', [Validators.required]],
    message: ['', [Validators.required]],
    otp: ['']
  });

  showOtp(){
    this.reportService.sendOtp(this.report.value.email).subscribe();
    this.otp = true;
  }

  submit(){
    let data: any = {};
    data = this.report.value;
    data.file = this.filedata;
    data.latitude = this.latitude;
    data.longitude = this.longitude;

    if(this.report.valid){
      this.reportService.checkOtp(data.otp, data.email).subscribe(
        res => {
          if(res){
            this.reportService.addReport(data).subscribe(
              response => this.reportRes = response,
              error => console.log(error),
              () => {
                this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                  this.router.navigate(['/savean/register']);
                }).then(() => this.snackBar.open('Report Submitted Successfully', 'dismiss', { duration: 2000 }))
              }
            );
          }
          else{
            this.snackBar.open('Incorrect OTP', 'dismiss', { duration: 2000 })
          }
        },
        error => console.log(error)
      );
    }
  }

  login(){
    this.router.navigate(['/savean/login']);
  }

  uploadImage(event){
    this.filedata = event.target.files[0];
  }

}
