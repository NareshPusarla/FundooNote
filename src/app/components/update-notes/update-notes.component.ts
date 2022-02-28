import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { NotesserviceService } from '../../service/notesservice/notesservice.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {

  title:any;
  description:any;
  id:any;

  constructor(private noteService:NotesserviceService , public dialogRef: MatDialogRef<UpdateNotesComponent>, 
    @Inject(MAT_DIALOG_DATA) public note: any, private snackBar: MatSnackBar) { 
   
  }

  ngOnInit(): void {
    this.title = this.note.title;
    this.description = this.note.description;
    this.id = this.note.id;
    console.log("hi this is notes", this.note);
  }

  updateNotes(){
    let data = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }
    this.noteService.updateNotes(data).subscribe((response:any)=>{
      console.log("updated notes", response);
    }, error=>{
      console.log(error);
    })
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {duration:3000});
  }
}
