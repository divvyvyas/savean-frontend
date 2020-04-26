import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Report } from 'src/app/shared/models/report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  public baseUrl: string;

  constructor(
    private http: HttpClient,
    private bs: BaseService
  ) {
    this.baseUrl = bs.baseUrl;
  }

  getAllReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.baseUrl + "report/");
  }

  addReport(report: any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append("email", report.email);
    formData.append("name", report.name);
    formData.append("file", report.file);
    formData.append("message", report.message);
    formData.append("latitude", report.latitude);
    formData.append("longitude", report.longitude);

    return this.http.post<any>(this.baseUrl + "report/add", formData);
  }

  downloadAttachment(fileName) {
    return this.http.get(this.baseUrl + "file/downloadFile/" + fileName, { responseType: 'blob' });
  }

  deleteOneReport(id: number) {
    return this.http.delete(this.baseUrl + "report/" + id, { responseType: 'text' });
  }

  updateReport(report: Report): Observable<Report> {
    return this.http.put<Report>(this.baseUrl + "report/", report);
  }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        observer.next(pos);
      }),
      () => {
          console.log('Position is not available');
      },
      {
        enableHighAccuracy: true
      };
    });
  }

  sendOtp(email): Observable<void> {
    return this.http.get<void>(this.baseUrl + "report/sendOtp/" + email);
  }

  checkOtp(otp, email): Observable<boolean> {
    let formData = new FormData();
    let o = parseInt(otp);
    formData.append("otp", otp);
    formData.append("email", email);
    console.log(otp + " | " + email);
    return this.http.post<boolean>(this.baseUrl + "report/checkotp", formData);
  }
}
