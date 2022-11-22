import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


export function passwordsMatchValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  signupForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  }, { validators: passwordsMatchValidator() }

  );
  constructor(private authservice: AuthenticationService,
    private toast: HotToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get name() { return this.signupForm.get('name'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  submit() {
    if (!this.signupForm.valid)
     {
       return;
     }

    const { name, email, password } = this.signupForm.value;
    this.authservice.signUp(name, email, password).pipe(
      this.toast.observe({
        success: "You are sign up successefully !",
        loading: 'Signing up ..',
        error: ({ message }) => ` ${message}`

      })
    ).subscribe(() => {
      this.router.navigate(["/login"]);
    })
  }
}
