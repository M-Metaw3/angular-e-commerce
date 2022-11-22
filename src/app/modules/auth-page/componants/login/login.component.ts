import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })
  constructor(public authservice:AuthenticationService
    ,private router:Router,
    private toast:HotToastService
    
    
    ) { }

  ngOnInit(): void {
  }
  get email()
  {
    return this.loginform.get('email');
  }
  get password()
  {
    return this.loginform.get('password');
  }
   submit()
  {
    if (!this.loginform.valid) { 
      return;
    }
    const {email,password}=this.loginform.value;
    this.authservice.login(email,password).pipe(

      
this.toast.observe({
success:"Login Successefully",
loading:"Loading in ...",
error:"There an error"

})).subscribe(()=>{
  this.router.navigate(['/home']); });

   
  }

}
