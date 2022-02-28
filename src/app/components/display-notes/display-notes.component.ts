import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';
import { UpdateNotesComponent } from 'src/app/components/update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  @Input() dataList:any;
  @Output() displayColorEvent = new EventEmitter<string>();
  message="display update";
  title:any;
  description:any;
  id: any;
  show:boolean = true;

  constructor(private notesService:NotesserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.dataList);
  }

  openDialog(dataNotes:any): void {
    console.log("updated notes", dataNotes);
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '500px',
      data:dataNotes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
      this.description = result;
    });
  }
  
  colorMessage(e:any){
    console.log(e);
    
    this.displayColorEvent.emit(this.message);
  }
}
