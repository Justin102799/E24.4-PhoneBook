import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { CONTACTS } from 'src/app/mock-phoneBook/mock-phoneBook';
import * as uuid from 'uuid';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {
  phoneContacts = CONTACTS;
  newId = 0;
  newContactName = '';
  newPhoneNumber = '';
  selectedPhoneContacts?: Book;
  
  addContact(){
      const id = uuid.v4()
      this.phoneContacts.push({id, contactName: this.newContactName, phoneNumber: this.newPhoneNumber, }) 
      console.log (id);
    };

  ClickDelete(telNumber: Book){
    var index = this.phoneContacts.indexOf(telNumber) 
    if(index !== -1){
      this.phoneContacts.splice(index, 1)
    }
  };

  updateContact(contact: Book){
    this.selectedPhoneContacts = contact;
  }

  }

