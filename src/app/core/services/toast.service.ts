import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  success(message) {
    this.snackBar(message, 'success-snackbar')
  }

  error(message) {
    this.snackBar(message, 'danger-snackbar')
  }

  info(message) {
    this.snackBar(message, 'info-snackbar')
  }

  snackBar(message, panelClass) {
    this._snackBar.open(message, null, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: [panelClass]
    });
  }
}
