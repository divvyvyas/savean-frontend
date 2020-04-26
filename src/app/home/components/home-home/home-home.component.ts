import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report.service';
import { Report } from 'src/app/shared/models/report';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.scss']
})
export class HomeHomeComponent implements OnInit {

  public reportData: Report[];

  constructor(
    private _reportService: ReportService
  ) { }

  ngOnInit(): void {
    this._reportService.getAllReports().subscribe(
      data => this.reportData = data,
      error => console.log(error)
    );
  }

}
