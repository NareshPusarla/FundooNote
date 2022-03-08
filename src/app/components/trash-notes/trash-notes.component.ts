import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice/dataservice.service';
import { NotesserviceService } from '../../service/notesservice/notesservice.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.css']
})
export class TrashNotesComponent implements OnInit {

  trashList:any;
  visible:any;
  constructor(private notesService:NotesserviceService, private dataService:DataserviceService) { }

  ngOnInit(): void {
    this.trashNotes();
    console.log("hi trash list");
    this.dataService.funShare.subscribe(x => this.visible = x);
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
