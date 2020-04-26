import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { map, timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<any> = null;

  public baseUrl: string;

  constructor(
    private baseService: BaseService,
    private http: HttpClient,
  ) {
    this.baseUrl = baseService.baseUrl;
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('data')));
  }

  loggedIn() {
    let data = {
      "username": "qwerty0110",
      "userType": "admin",
      "token": "token"
    }
    // localStorage.setItem("data", JSON.stringify(data));
    // this.currentUserSubject.next(data);
    return !!localStorage.getItem('data');
  }

  logout() {
    // this.router.navigate(['/']);
    this.currentUserSubject.next(null);
    localStorage.removeItem('data');
    localStorage.removeItem('theme');
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + "user/login", user).pipe(
      map(response => {
        if (response) {
          delete response['password'];
          localStorage.setItem('data', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  changePassword(data: any) {
    return this.http.post(this.baseUrl + "user/changePassword", data).pipe(
      timeout(10000),
      catchError(error => {
        return throwError(error)
      })
    );
  }

  getData(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }
}
