import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  data:any;
  inputType:string = "password";

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService, private router:Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showPassword(event:any):void{
    event.target.checked ? this.inputType = "text": this.inputType = "password"; 
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
          localStorage.setItem('token', response.id);
          this.snackBar.open('user login successful','dismiss', {duration:3000});
          this.router.navigateByUrl("/dashboard/notes")          
        }, error=>{
          console.log(error);
        })
        
    } else {
      console.log("invalid");
    }
  }

}
