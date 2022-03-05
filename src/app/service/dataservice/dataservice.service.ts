import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private content = new Subject<any>();
  public share = this.content.asObservable();

  private subject = new Subject<any>();
  public funShare = this.subject.asObservable();
  constructor() { }

  updateData(text:any){
    this.content.next(text);
  }

  sendFun(message:any){
    this.subject.next(message);
  }
}
