import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';


@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {
  emailAlreadyRegistered: boolean = false;
  emailVerifying: boolean = false;
  submitting: boolean = false;

  registeredFormData: AuthModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null
  }

  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
  }

  verifyEmail() {
    this.emailVerifying = true;
    this.authService.isEmailRegistered(this.registeredFormData.email)
      .subscribe(resp => {
       this.emailVerifying = false;
        this.emailAlreadyRegistered  = resp.data.status == "EXISTS";
      }, error => {
       this.emailVerifying = false;
        this.emailAlreadyRegistered = true;
      });
  }

  registeration(form: NgForm) {
    if (form.valid && !this.emailAlreadyRegistered) {
      this.submitting = true;
      this.authService.register(this.registeredFormData).subscribe(res => {
        form.resetForm();
        this.toastService.success(res.message);
        this.submitting = false;

      }, error => {
        this.toastService.error(error.message);
        this.submitting = false;

      })
    }
  }
}
