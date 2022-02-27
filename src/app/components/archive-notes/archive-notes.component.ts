import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.css']
})
export class ArchiveNotesComponent implements OnInit {

  archiveList:any;
  constructor(private notesService:NotesserviceService) { }

  ngOnInit(): void {
    this.archiveNotes();
  }

  archiveNotes(){
    this.notesService.getTrashNotes().subscribe((res:any)=>{
      console.log(res);
      this.archiveList = res.data.data;
      console.log(this.archiveList);
      
    }, error=>{
      console.log(error); 
    })
  }
}
