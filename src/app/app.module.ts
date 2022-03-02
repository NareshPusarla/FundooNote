import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthserviceService } from './service/authentication/authservice.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component'
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ForgotEmailComponent,
    SignInComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    GetAllNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    UpdateNotesComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
