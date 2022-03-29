import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  header:any;

  constructor(private httpService:HttpserviceService) { 
    // this.header={
    //   headers:new HttpHeaders({
    //     'Content-Type':'application/json'
    //   })
    // }
  }

  userRegister(data:any){
    return this.httpService.postData('user/userSignUp', data, false)
  }

  userLogin(data:any){
    return this.httpService.postData('user/login', data, false)
  }

  updateEmail(data:any){
    return this.httpService.putData('user/reset', data, false)
  }

  updatePassword(data:any){
    return this.httpService.putData('user/reset-password', data, false)
  }
}
