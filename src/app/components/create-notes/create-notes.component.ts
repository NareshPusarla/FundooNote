import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  message = "notes created";
  show:boolean=false;
  title:any;
  desc:any;

  constructor(private notes:NotesserviceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  showHide(){
    this.show=!this.show
  }

  addNotes(){
    console.log(this.title);
    console.log(this.desc);
    this.showHide();
    let reqdata={
      title : this.title,
      description : this.desc
    }
    this.notes.addNotes(reqdata).subscribe((response:any)=>{
      console.log("hi",response);
      this.messageEvent.emit(this.message);
      this.snackBar.open("notes created", "dsimiss", {duration:3000});
      
    }, error=>{
      console.log(error);
    })
    
  }

}
