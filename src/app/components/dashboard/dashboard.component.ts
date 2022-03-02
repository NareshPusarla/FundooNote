import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import {DomSanitizer} from '@angular/platform-browser';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/service/dataservice/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

  
  mobileQuery: MediaQueryList;
  filteredString = "";

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private snackBar: MatSnackBar, private dataService:DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  updateText(filteredString: any){
    this.dataService.updateData(filteredString);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login");
    console.log("Logout successfull");
    this.snackBar.open("successfully logged out", "dismiss", {duration:3000});
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
