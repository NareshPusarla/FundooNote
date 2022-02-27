import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService:HttpserviceService) { }

  userRegister(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postData('user/userSignUp', data, false, header)
  }

  userLogin(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.postData('user/login', data, false, header)
  }

  updateEmail(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.putData('user/reset', data, false, header)
  }

  updatePassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpService.putData('user/reset-password', data, false, header)
  }
}
