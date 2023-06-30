import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component'; 
import { FilterPipe } from './filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    DetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
   
  ],
  
  providers: [{provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule, MatDialogModule ]
})
export class AppModule { }
