import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private content = new Subject<any>();
  public share = this.content.asObservable();

  constructor() { }

  updateData(text:any){
    this.content.next(text);
  }
}
