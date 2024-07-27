import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@brand-env/environment';
import { AppStoreService } from '../app.store.service';

@Injectable({
  providedIn: 'root',
})
export class ApisInterceptor implements HttpInterceptor {
  constructor(private _AppStoreService: AppStoreService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({
        url: request.url.includes('assets') ? request.url : environment.baseUrl + request.url, // need best condition
        headers: request.headers
          .append('Content-Type', 'application/json')
          .append('Authorization', `Bearer ${this._AppStoreService.getCredintials ? this._AppStoreService.getCredintials.token : ''}`),
      });
    }
    return next.handle(request);
  }
}
