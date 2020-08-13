import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((errorResponse: HttpErrorResponse) => {
                let execption: any = {};
                
                const { error } = errorResponse;
                
                if(error.errors && error.errors.length > 0) {
                    execption = error.errors[0];
                } else {
                    execption = errorResponse;
                }

                return throwError(execption);
            })

        )
    }

}