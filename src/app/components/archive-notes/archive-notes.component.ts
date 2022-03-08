import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice/dataservice.service';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.css']
})
export class ArchiveNotesComponent implements OnInit {

  archiveList:any;
  visible:any;
  constructor(private notesService:NotesserviceService, private dataService:DataserviceService) { }

  ngOnInit(): void {
    this.archiveNotes();
    console.log("hi archive list");
    this.dataService.funShare.subscribe(x => this.visible = x);
  }

  archiveNotes(){
    this.notesService.getArchiveNotes().subscribe((res:any)=>{
      console.log(res);
      this.archiveList = res.data.data;
      console.log(this.archiveList.reverse());
      
    }, error=>{
      console.log(error); 
    })
  }

  receiveMessage(e:any){
    this.archiveNotes();
  }
}
