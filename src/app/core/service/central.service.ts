import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginReponse } from '../dto/login.response';
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(private http: HttpClient, private router: Router, private loading: NgxSpinnerService) { }

  login(username: string, password: string): Promise<LoginReponse> {
    return new Promise(resolve => {
      this.post('/auth/login', {
        'username': username,
        'password': password
      }).then(data => {
        if (data) {
          let d = <LoginReponse>data;
          sessionStorage.setItem('app_secret', JSON.stringify(d));
          resolve(d);
        }
      });
    });
  }

  private refreshToken(): Promise<boolean> {
    return new Promise(resolve => {
      let token = <LoginReponse>JSON.parse(sessionStorage.getItem('app_secret') || '{}');
      sessionStorage.removeItem('app_secret');
      this.post('/auth/refresh-token', { 'refreshToken': token.refreshToken }).then(result => {
        if (result.code == 200) {
          let d = <LoginReponse>result;
          sessionStorage.setItem('app_secret', JSON.stringify(d));
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }

  getToken(): string | null {
    return sessionStorage.getItem('app_secret');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  private setHttpHeaders(header?: HttpHeaders): HttpHeaders {
    let headers;
    let token = JSON.parse(sessionStorage.getItem('app_secret') || '{}');
    if (token.token) {
      headers = header ? header : new HttpHeaders().set('Content-Type', 'application/json;').set('Authorization', 'Bearer ' + token.token)
    } else {
      headers = header ? header : new HttpHeaders().set('Content-Type', 'application/json;')
    }
    return headers;
  }

  private handleError(method: string, error: HttpErrorResponse, url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    return new Promise(resolve => {

      if (error.error.message.includes('JWT signature does not match locally')) {
        sessionStorage.removeItem('app_secret');
        this.router.navigateByUrl('/');
      }
      if (error.error.code == 300 || error.error.code == 310) { //300 = Unable to get JWT Token, 310 = JWT Token has expired
        this.refreshToken().then(done => {
          //if refresh token success call method again.
          if (done) {
            let headers = this.setHttpHeaders(header);
            setTimeout(() => {
              if (method == 'get') this.get(url, parameters, headers).then(relsult => resolve(relsult));
              if (method == 'post') this.post(url, parameters, headers).then(relsult => resolve(relsult));
              if (method == 'put') this.put(url, parameters, headers).then(relsult => resolve(relsult));
              if (method == 'patch') this.patch(url, parameters, headers).then(relsult => resolve(relsult));
              if (method == 'delete') this.delete(url, parameters, headers).then(relsult => resolve(relsult));
              if (method == 'options') this.options(url, parameters, headers).then(relsult => resolve(relsult));
            }, 100)
          } else {//if refresh token fail navigate to login page.
            // this.matDialog.closeAll();
            sessionStorage.removeItem('app_secret');
            this.router.navigateByUrl('/');
          }
        })
      } else {
        throw error;
      }
    });
  }

  get(url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.get(environment.apiUrl + url, { headers: headers, params: parameters }).subscribe({
          next: (data: any) => { resolve(data); },
          error: (error: any) => this.handleError('get', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();}
        });
      } else {
        this.http.get(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('get', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();}
        });
      }
    });
  }

  post(url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.post(environment.apiUrl + url, parameters, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('post', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();}
        });
      } else {
        this.http.post(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('post', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();}
        });
      }
    });
  }

  patch(url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.patch(environment.apiUrl + url, parameters, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('patch', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      } else {
        this.http.patch(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('patch', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      }
    });
  }

  delete(url: string, parameters?:any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.delete(environment.apiUrl + url, { headers: headers, body: parameters }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('delete', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      } else {
        this.http.delete(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('delete', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      }
    });
  }

  put(url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.put(environment.apiUrl + url, parameters, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('put', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      } else {
        this.http.put(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('put', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      }

    });
  }


  options(url: string, parameters?: any, header?: HttpHeaders): Promise<any> {
    this.loading.show();
    return new Promise(resolve => {
      let headers = this.setHttpHeaders(header);
      if (parameters) {
        this.http.options(environment.apiUrl + url, { headers: headers, params: parameters }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('options', error, url, parameters).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      } else {
        this.http.options(environment.apiUrl + url, { headers: headers }).subscribe({
          next: (data: any) => resolve(data),
          error: (error: any) => this.handleError('options', error, url).then(result => resolve(result)).catch(error => resolve(error.error)),
          complete: () => {this.loading.hide();
          }
        });
      }
    });
  }


}
