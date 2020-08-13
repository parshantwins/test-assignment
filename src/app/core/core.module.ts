import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from '../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    MatSnackBar
  ],
})
export class CoreModule { }
