import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() card:any;
  @Output() colorEvent = new EventEmitter<string>();
  message = "color applied";
  id:any;
  show:boolean = true;
  
  colors: Array<any> = [
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#ffffff', name: 'white' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ]

  constructor(private notesService:NotesserviceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  archiveNote(){
    console.log(this.card.id);
    let archiveData = { 
      noteIdList: [this.card.id],
      isArchived:true
    }
    this.notesService.archiveNotes(archiveData).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open("moved to archive", "dismiss", {duration:3000});
    }, error=>{
      console.log(error);
    })
  }

  trash(){
    console.log("card id", this.card.id);
    let trashData = {
      noteIdList : [this.card.id],
      isDeleted:true
    }
    this.notesService.trashNotes(trashData).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open("moved to trash", "dismiss", {duration:3000});
    }, error=>{
      console.log(error);
    }
    )
  }

  deleteForever(){
    console.log("card id", this.card.id);
    let trashData = {
      noteIdList : [this.card.id],
      isDeleted:false
    }
    this.notesService.deleteNotesForever(trashData).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open("deleted permanently", "dismiss", {duration:3000});
    }, error=>{
      console.log(error);
    }
    )
  }

  color(color:any){
    console.log("hi color api ");
    let data = {
      color: color,
      noteIdList: [this.card.id],
    }
    this.notesService.colorNotes(data).subscribe((response:any)=>{
      console.log(response);
      this.colorEvent.emit(this.message);
      this.snackBar.open("color applied", "dismiss", {duration:3000});
    })
  }

}
