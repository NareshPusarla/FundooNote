import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../service/notesservice/notesservice.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.css']
})
export class TrashNotesComponent implements OnInit {

  trashList:any;
  constructor(private notesService:NotesserviceService) { }

  ngOnInit(): void {
    this.trashNotes();
    console.log("hi trash list");
  }

  trashNotes(){
    this.notesService.getTrashNotes().subscribe((res:any)=>{
      console.log(res);
      this.trashList = res.data.data;
      console.log(this.trashList.reverse());
      
    }, error=>{
      console.log(error); 
    })
  }

  receiveMessage(e:any){
    this.trashNotes();
  }
}
