import { Component, Input, OnInit } from '@angular/core';
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

  isGrid = false;
  // isVisible:boolean = false;
  mobileQuery: MediaQueryList;
  filteredString = "";
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router, private snackBar: MatSnackBar, private dataService:DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  updateText(filteredString: any){
    console.log("hi this is string msg", filteredString.target.value);
    this.dataService.updateData(filteredString.target.value);
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

  listView(){
    this.isGrid=true;
    this.dataService.sendFun(this.myFunction().valueOf());
    console.log("function",this.myFunction());
    console.log("grid",this.isGrid);
  }

  gridView(){
    this.isGrid=false;
    this.dataService.sendFun(this.myFunction().valueOf());
    console.log("function",this.myFunction());
    console.log("grid",this.isGrid);
  }

  check:boolean= false;
  myFunction(){
    if(this.check ==  false){
      this.check=true;
      return this.check
    }
    else{
      this.check=false;
      return this.check
    }
    
  }
}
