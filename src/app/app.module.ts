import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { AddcontactComponent } from './components/addcontact/addcontact.component';
import { DeletecontactComponent } from './components/deletecontact/deletecontact.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AddcontactComponent,
    DeletecontactComponent,
    UpdatecontactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    DeletecontactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
