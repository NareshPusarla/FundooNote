import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService, private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        this.data={
          email:this.registerForm.value.email,
          password:this.registerForm.value.password
        }
        this.userService.userLogin(this.data).subscribe((response:any)=>{
          console.log(response)
          localStorage.setItem('token',response.id)
          this.router.navigateByUrl("/dashboard/notes")
        }, error=>{
          console.log(error);
        })
        
    } else {
      console.log("invalid");
    }
  }

}
