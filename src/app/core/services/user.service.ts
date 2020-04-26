import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl: string;

  constructor(
    private http: HttpClient,
    private bs: BaseService
  ) {
    this.baseUrl = bs.baseUrl;
  }

  
}
