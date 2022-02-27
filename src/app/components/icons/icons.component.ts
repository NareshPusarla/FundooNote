import { Component, Inject, Input, OnInit } from '@angular/core';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() card:any;
  id:any;
  colors=[
    {name: 'red', code:'rgb(233, 70, 70)'},
    {name: 'green', code:'rgb(135, 233, 70)'},
    {name: 'orange', code:'rgb(255, 165, 0)'},
    {name: 'silver', code:'rgb(122, 120, 116)'},
    {name: 'pink', code:'rgb(255, 182, 193)'},
    {name: 'teal', code:'rgb(0, 128, 128)'},
    {name: 'blue', code:'rgb(73, 113, 245)'},
    {name: 'lightblue', code:'rgb(73, 211, 245)'},
    {name: 'purple', code:'rgb(128, 0, 128)'},
    {name: 'gray', code:'rgb(128, 128, 128)'},
    {name: 'brown', code:'rgb(148, 39, 39)'},
    {name: 'chocolate', code:'rgb(210, 105, 30)'}
  ]

  constructor(private notesService:NotesserviceService) { }

  ngOnInit(): void {
  }

  archiveNote(){
    console.log(this.card.id);
    let archiveData = { 
      noteIdList: this.card.id,
      isArchived:true
    }
    this.notesService.archivehNotes(archiveData).subscribe((response: any) => {
      console.log(response);
    })
  }

  trash(){
    console.log("card id", this.card.id);
    let trashData = {
      noteIdList : this.card.id,
      isDeleted:true
    }
    this.notesService.trashNotes(trashData).subscribe((response:any)=>{
      console.log(response);
    }, error=>{
      console.log(error);
    }
    )
  }

  setColor(color:any){
    console.log("hi color api ");
    let colorData = {
      noteIdList : [this.card.id],
      color: color
    }
    this.notesService.colorNotes(colorData).subscribe((response:any)=>{
      console.log(response);
    })
  }

  color(noteColor:any){
    console.log("hi color", noteColor);
    this.setColor(noteColor);
  }
}
