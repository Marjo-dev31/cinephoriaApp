  import { inject, Injectable } from '@angular/core';
  import { environment } from '../../environments/environment';
  import { HttpClient } from '@angular/common/http';
  import {LoginCredantialInterface, CurrentUserInterface} from '../user/user.interface';
  import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
  
  @Injectable({
    providedIn: 'root',
})
  export class UserService {
    private readonly url = `${environment.serverUrl}/user`;
    private readonly http = inject(HttpClient);

    currentUser = new BehaviorSubject<CurrentUserInterface>({
        id: '',
        username: '',
        role: '',
        access_token:''
    });

    access_token = new BehaviorSubject<string | undefined >('');

  login(credentials: LoginCredantialInterface): Observable<CurrentUserInterface> {
        return this.http
            .post<CurrentUserInterface>(`${this.url}/login`, credentials)
            .pipe(
                tap((user) => {
                    this.currentUser.next({
                        id: user.id,
                        username: user.username,
                        role: user.role,
                        access_token: user.access_token
                    });
                    this.access_token.next(user.access_token)
                }),
                catchError((err) => {
                    const errorMessage = err?.error?.message;
                    return throwError(() => new Error(errorMessage));
                }),
            );
    }
  }