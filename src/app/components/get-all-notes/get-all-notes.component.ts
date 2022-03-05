import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DataserviceService } from 'src/app/service/dataservice/dataservice.service';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.css']
})
export class GetAllNotesComponent implements OnInit {

  notes:any=[];
  id:any;
  visible:any;

  constructor( private notesService:NotesserviceService, private dataService:DataserviceService){  }

  ngOnInit(): void {
    this.getNotes();
    this.dataService.funShare.subscribe(x => this.visible = x);
  }

  getNotes(){
    this.notesService.getNotes().subscribe((res:any)=>{
      console.log("hi res",res);
      this.notes=res.data.data;
      this.notes = this.notes.filter(function(ele:any){
        return ele.isDeleted === false && ele.isArchived === false;
      });

      console.log(this.notes.reverse());
      
    }, error=>{
      console.log(error); 
    })
  }

  receiveMessage(e:any){
    this.getNotes();
  }
  
}
