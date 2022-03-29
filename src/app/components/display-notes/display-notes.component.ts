import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesserviceService } from 'src/app/service/notesservice/notesservice.service';
import { UpdateNotesComponent } from 'src/app/components/update-notes/update-notes.component';
import { DataserviceService } from 'src/app/service/dataservice/dataservice.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  @Input() dataList:any;
  @Output() displayEvent = new EventEmitter<string>();
  filteredString = "";
  message="display update";
  title:any;
  description:any;
  id: any;

  visible:any;

  constructor(private notesService:NotesserviceService, public dialog: MatDialog, private dataService:DataserviceService) { }

  ngOnInit(): void {
    console.log(this.dataList);
    this.dataService.share.subscribe(x => this.filteredString = x);
    this.dataService.funShare.subscribe(x => this.visible = x);
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
  
  refreshMessage(e:any){
    console.log(e);
    this.displayEvent.emit(this.message);
  }

  
}
