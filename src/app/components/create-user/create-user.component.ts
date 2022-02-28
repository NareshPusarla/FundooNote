import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService, private snackBar: MatSnackBar) {}

  ngOnInit():void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      service: "advance"
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data={
          firstName:this.registerForm.value.firstName,
          lastName:this.registerForm.value.lastName,
          email:this.registerForm.value.userName,
          password:this.registerForm.value.password,
          service:this.registerForm.value.service
        }
        this.userService.userRegister(data).subscribe((response:any)=>{
          console.log(response);
        }, error=>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {duration:3000});
  }

}


