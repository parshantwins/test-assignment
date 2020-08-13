import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AuthHeaderComponent } from './layout/auth/header/auth-header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DatediffPipe } from './pipes/datedifference.pipe';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    DatediffPipe
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    FormsModule,
    RouterModule,
    DatediffPipe,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AuthHeaderComponent,
    MDBBootstrapModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
  ]
})
export class SharedModule { }
