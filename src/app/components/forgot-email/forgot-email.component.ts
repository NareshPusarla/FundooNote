import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css']
})
export class ForgotEmailComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService:UserserviceService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
        console.log("valid data", this.registerForm.value);
        let data={
          email:this.registerForm.value.email
        }
        this.userService.updateEmail(data).subscribe((response:any)=>{
          console.log(response);
          
        }, error=>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
