import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService:UserserviceService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data={
          password:this.registerForm.value.password,
          confirm:this.registerForm.value.confirm
        }
        this.userService.updatePassword(data).subscribe((response:any)=>{
          console.log(response);
        }, error=>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
