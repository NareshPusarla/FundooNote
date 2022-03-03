# FundooNotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Description:
	
	This is a notebook web application developed by using typescript. HTML for the UI presentation with CSS styling part. 
## Project Structure:
## CreateNotes Component:
- Initially we create our notes by using **Take A Note** displaying box with title andd description.
- Here after placing the notes just by clicking on close button our notes will be created.
- Here we gave **(onclick)** functionality for close button to create the notebook.
- From create notes is sharing data to displaynotes by POST api to create note.
-![This is image]("../assets/reference/")

## DisplayNotes Component:
- Here we will receive the data from createnotes component by property binding and send to display notes component to display the note in the 
 title and description template form by two-way data binding.
- Here we are using the ngFor to access the array of data and by data binding we are the assigning the information for the attributes.
-![This is image]("../assets/reference/")

## UpdateNotes Component:
- This is to modify the the note we created.
- Here by using MatDialog we send the data from displaynotes component to updatenote component to show the current note of stored in display notes.
- In updatenotes component using MatDialogRef we receive the information from displaynotes.
- Here we are using an update api to store the updated note information.
- This updated infomation will be send to displaynotes and the updated data will be appear to the user.
-![This is image]("../assets/reference/")

## Icons Component:
### Color Pallete:
- This feature is to apply the color to our notes.
- By using an api we are applying the color to notes.
 
### Archive:
- This to make a specific note archive.
- For all the archived notes we are providing a page and by parent to child relation between archive notes coponent and displaynotes we are displaying the archived notes in a seperate page.

### Delete:
- Here I gave a button with delete option to delete a particular note.
- Same as like archive here also for list of deleted notes we gave a new navigation page.
- Here we are providing the parent to child relation between trash component and display component to display the deleted notes in our trash page.

## User Register Page:
- Designed the project logo and placed as a header.
- Created the **Register page** with required fields and gave routing element to navigate to login page.
- Here we used angular mat elements to design this page like <mat-form-field>, <mat-label> etc., and script code to password visibility.
- Created api's as per the user registration.
-![This is image]("../assets/reference/register.png")

## User Login Page:
- Here also we use angular mat elements for text box and done styling as per that.
- Gave navigation for the users who forgot email and to update the email.
-![This is image]("../assets/reference/login.png")

## Forgot Email Page:
- Here is my email forget page to update the email.
-![This is image]("../assets/reference/forgetemail.png")

## Forgot or Reset Password Page:
- For further usage created this page with two fields **New Password** and **Confirm Password**.
-![This is image]("../assets/reference/resetpassword.png")

## DashBoard Page:
- Here we used mat tool bar, mat icon, mat side nav body elements to design header and side navigation bar.
- Using parent to child relationship connected to get-all-notes component to display all the notes creating.
-![This is image]("../assets/reference/dashboard.png")
-![This is image]("../assets/reference/dashboardUpdated.png")

## Create Notes Page:
- Here we used input and mat-input for title and description and gave styles according to that.
- After entering data to transfer data from create notes component to display notes to display the content 
  used parent to child relationship by initilizing the value into an attribute in the app-selector.
- Here we gave our api to create notes and gave action by clicking on close button the data transfering will done.
-![This is image]("../assets/reference/takenotes.png")

## Display Notes Page:
- Here after the hitting api in create notes the transfered data will receive by this component by the given parent to child relation.
- Using angular materials this template has designed.
-![This is image]("../assets/reference/getallnotes.png")

## Update Notes Page:
- Here we are fetching data from display notes using MatDialog and receiving data using MatDislogReferenece.
- We are using update notes api to share the new data instead of old data.
- After entering new information the data will share to display notes and modified data will be display on the get notes page.
-![This is image]("../assets/reference/updatenotes.png")

## Delete Notes:
- In the icons we declared more options and using menu bar gave delete button.
- Here we given delete action api to to acheive this operation.
-![This is image]("../assets/reference/deletenotes.png")

##Archeive Notes:
- In icons component we gave archeive option to store the display template.
- Using archeive api to perform this action.
-![This is image]("../assets/reference/iconsupdate.png")

## Icons:
- The icons to apply color styles, editing, gallery, etc., All the icons are fetched by [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons).
- To display the icon here we used mat-icon angualar material tag.
-![This is image]("../assets/reference/iconsupdate.png")


- Here we created http service, user service, note service, authentication service to initialize api's.