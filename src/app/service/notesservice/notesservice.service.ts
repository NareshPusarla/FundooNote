import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  token:any;
  constructor(private httpService:HttpserviceService) {
    this.token=localStorage.getItem('token')
  }

  addNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postData('notes/addNotes', data, true, header)
  }

  getNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getData('notes/getNotesList', true, header)
  }

  updateNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postData('notes/updateNotes', data, true, header)
  }

  // trashNotes(data:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json',
  //       'Authorization':this.token
  //     })
  //   }
  //   return this.httpService.postData('notes/trashNotes', data, true, header)
  // }

  trashNotes(data:any){
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      console.log(data);
      return this.httpService.postData('notes/trashNotes', data, true, httpOptions)
  }

  deleteNotesForever(data:any){
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      console.log(data);
      return this.httpService.postData('notes/deleteForeverNotes', data, true, httpOptions)
  }

  archiveNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    console.log(data);
    
    return this.httpService.postData('notes/archiveNotes', data, true, header)
  }

  getTrashNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getData('notes/getTrashNotesList', true, header)
  }

  getArchiveNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getData('notes/getArchiveNotesList', true, header)
  }

  colorNotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postData('notes/changesColorNotes', data, true, header)
  }
}