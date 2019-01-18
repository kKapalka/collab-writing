import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {map} from 'rxjs/operators';
import {Token} from '../models/token';

@Injectable()
export class AuthService {

  private url = 'http://localhost:4444';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {
    return this.http.post(this.url + '/auth/signin', {
      login: credentials.login,
      password: credentials.password
    }).pipe(
      map((result: Token) => {
        if (result && result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          localStorage.setItem('currentUser',result.username);
          return true;
        }
        return false;
      })
    );
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/user/create', credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
