import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';
import {HelperService} from "../services";


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private helper:HelperService) {
  }

  // @ts-ignore
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const start = performance.now();
      return next.handle(request).pipe(
        filter(event => event instanceof HttpResponse),
        map(res => {
          return res;
        }),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            try {
              if ( err.status === 401) {
                localStorage.clear();
                this.helper.common.showError('Unauthenticated')
              // unauthorised code
              }
            } catch (e) {
            }
          }
          return of(err);
        }));
  }
}
