import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  token:any;
  header:any;
  constructor(private httpService:HttpserviceService) {
    this.token=localStorage.getItem('token')
    this.header ={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
  }

  addNotes(data:any){
    return this.httpService.postData('notes/addNotes', data, true, this.header)
  }

  getNotes(){
    console.log("token === ",this.token);
    return this.httpService.getData('notes/getNotesList', true, this.header)
  }

  updateNotes(data:any){
    return this.httpService.postData('notes/updateNotes', data, true, this.header)
  }

  trashNotes(data:any){
    return this.httpService.postData('notes/trashNotes', data, true, this.header)
  }

  deleteNotesForever(data:any){
      return this.httpService.postData('notes/deleteForeverNotes', data, true, this.header)
  }

  archiveNotes(data:any){
    return this.httpService.postData('notes/archiveNotes', data, true, this.header)
  }

  getTrashNotes(){
    return this.httpService.getData('notes/getTrashNotesList', true, this.header)
  }

  getArchiveNotes(){
    return this.httpService.getData('notes/getArchiveNotesList', true, this.header)
  }

  colorNotes(data:any){
    return this.httpService.postData('notes/changesColorNotes', data, true, this.header)
  }
}