import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Email } from 'src/app/shared/models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) {
    this.baseUrl = baseService.baseUrl;
  }

  sendMail(email: Email){
    return this.http.post(this.baseUrl + "email", email);
  }
}
