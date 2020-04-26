import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/shared/models/report';
import { ReportService } from 'src/app/core/services/report.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {

  public showImage: boolean = true;

  @Input('report') public report: Report;

  constructor(
    private _reportService: ReportService,
    private router: Router,
    private snackBar: MatSnackBar,
    private _emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  showMap() {
    this.showImage = false;
  }

  showImg() {
    this.showImage = true;
  }

  markAsDone(id: number) {
    this._reportService.deleteOneReport(id).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => {
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/savean/home']);
        }).then(() => this.snackBar.open('Report Marked as Read Successfully', 'dismiss', { duration: 2000 }))
        let e: any = {};
        e.msgTo = this.report.email;
        e.subject = "Regarding your Complaint";
        e.message = "Your complaint has been registered and we are already on it.\n";
        this._emailService.sendMail(e).subscribe(
          data => data,
          error => console.log(error)
        );
      }
    );
  }

}
