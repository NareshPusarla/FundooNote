import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  token:any;
  // header:any;
  
  constructor(private httpService:HttpserviceService) {
    // this.token = localStorage.getItem('token')
    // this.header ={
    //   headers:new HttpHeaders({
    //     'Content-Type':'application/json',
    //     'Authorization':this.token,
    //   })
    // }
  }

  addNotes(data:any){
    return this.httpService.postData('notes/addNotes', data, true)
  }

  getNotes(){
    return this.httpService.getData('notes/getNotesList', true)
  }

  updateNotes(data:any){
    return this.httpService.postData('notes/updateNotes', data, true)
  }

  trashNotes(data:any){
    return this.httpService.postData('notes/trashNotes', data, true)
  }

  deleteNotesForever(data:any){
      return this.httpService.postData('notes/deleteForeverNotes', data, true)
  }

  archiveNotes(data:any){
    return this.httpService.postData('notes/archiveNotes', data, true)
  }

  getTrashNotes(){
    return this.httpService.getData('notes/getTrashNotesList', true)
  }

  getArchiveNotes(){
    return this.httpService.getData('notes/getArchiveNotesList', true)
  }

  colorNotes(data:any){
    return this.httpService.postData('notes/changesColorNotes', data, true)
  }
}