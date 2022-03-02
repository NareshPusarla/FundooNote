import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';

const routes: Routes = [
  {path:'register',component:CreateUserComponent},
  {path:'login',component:SignInComponent},
  {path:'forget',component:ForgotEmailComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'notes', component:GetAllNotesComponent},
  {path:'archiveNotes', component:ArchiveNotesComponent},
  {path:'trashNotes', component:TrashNotesComponent},
  {path:'displayNotes', component:DisplayNotesComponent},
  {path:'dashboard', component:DashboardComponent,
    children:[{path:'notes', component:GetAllNotesComponent},
    {path:'trashNotes', component:TrashNotesComponent},
    {path:'archiveNotes', component:ArchiveNotesComponent}
    ],
    canActivate:[AuthenticationGuard]
  },
  {path:'createnotes', component:CreateNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
