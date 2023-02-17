import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { CONTACTS } from 'src/app/mock-phoneBook/mock-phoneBook';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  phoneContacts = CONTACTS;
  newContactName = '';
  newPhoneNumber = '';

 

  addContact(){
      this.phoneContacts.push({contactName: this.newContactName, phoneNumber: this.newPhoneNumber, }) 
      // this.newContactName = '';
      // this.newPhoneNumber = '';
    };

  ClickDelete(telNumber: Book){
    var index = this.phoneContacts.indexOf(telNumber) 
    if(index !== -1){
      this.phoneContacts.splice(index, 1)
    }
  };
  }

