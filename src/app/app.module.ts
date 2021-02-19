import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ToastrModule} from 'ngx-toastr'
//used module for project.
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmpdashBoardComponent } from './empdash-board/empdash-board.component';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import {ApiService} from "./api.service";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpdashBoardComponent,
    DialogContentExampleDialogComponent,
    EmpDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSnackBarModule
  ],
  exports:[MaterialModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
