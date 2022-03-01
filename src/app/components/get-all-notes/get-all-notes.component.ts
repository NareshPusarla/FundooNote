import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.css']
})
export class GetAllNotesComponent implements OnInit {

  notes:any=[];
  id:any;
  constructor( private notesService:NotesserviceService){ }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesService.getNotes().subscribe((res:any)=>{
      console.log(res);
      this.notes=res.data.data;
      console.log(this.notes.reverse());
    }, error=>{
      console.log(error); 
    })
  }

  receiveMessage(e:any){
    this.getNotes();
  }
  
}
