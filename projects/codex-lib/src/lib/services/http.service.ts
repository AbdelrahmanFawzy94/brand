import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

// import { IApisResponse } from '@brand-shared';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient, private router: Router) {}

  getAsHttpResponse(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
    // ): Observable<HttpResponse<IApisResponse>> {
  ): Observable<HttpResponse<any>> {
    return this.http.get(url, options && Object.keys(options).length ? { ...options, observe: 'response' } : { observe: 'response' }).pipe(
      // map((data) => data as HttpResponse<IApisResponse>),
      map((data) => data),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  get(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
    // ): Observable<IApisResponse> {
  ): Observable<any> {
    return this.http.get(url, options).pipe(
      map((data) => data),
      // map((data) => data as IApisResponse),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  // getFile(url: string): Observable<HttpEvent<Blob>> {
  // return this.http.get(url, { responseType: 'blob', reportProgress: true, observe: 'events' });
  // .pipe(
  //   map((data) => data as Blob),
  //   catchError((error) => {
  //     return throwError(() => error);
  //   })
  // );
  // }

  postFile(url: string, body: any | null): Observable<HttpResponse<Blob>> {
    return this.http.post(url, body, { responseType: 'blob', reportProgress: true, observe: 'events' }).pipe(
      map((data) => data as HttpResponse<Blob>),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getByIdTextPlain(url: string, id: number | string) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(url + id, { headers, responseType: 'text' });
  }

  postAsHttpResponse(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
    // ): Observable<HttpResponse<IApisResponse>> {
  ): Observable<HttpResponse<any>> {
    return this.http
      .post(url, body, options && Object.keys(options).length ? { ...options, observe: 'response' } : { observe: 'response' })
      .pipe(
        // map((data) => data as HttpResponse<IApisResponse>),
        map((data) => data as HttpResponse<any>),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
  post(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
    // ): Observable<IApisResponse> {
  ): Observable<any> {
    return this.http.post(url, body, options).pipe(
      // map((data) => data as IApisResponse),
      map((data) => data),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  put(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
    // ): Observable<IApisResponse> {
  ): Observable<any> {
    return this.http.put(url, body, options).pipe(
      // map((data) => data as IApisResponse),
      map((data) => data),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  patch(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ) {
    return this.http.patch(url, body, options);
  }

  delete(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      context?: HttpContext;
      observe?: any; //TODO
      params?:
        | HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
      body?: any | null;
    }
  ) {
    return this.http.delete(url, options);
  }
}
