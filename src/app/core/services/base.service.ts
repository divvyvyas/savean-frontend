import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = "http://192.168.1.5:8081/";
  constructor() { }
}
