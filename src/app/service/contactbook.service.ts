import { Injectable } from '@angular/core';
import { CONTACTS } from '../mock-phoneBook/mock-phoneBook';
import { Book } from '../interfaces/book';
import { Observable, of } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ContactbookService {
  contacts = CONTACTS;
  phoneContacts: Book[] = [];
  newId = 0;
  newContactName = '';
  newPhoneNumber = '';
  selectedPhoneContacts?: Book;

  
  constructor() { }

  getContacts(): Observable<Book[]> {
    console.log(this.phoneContacts + "test")
    return of<Book[]>(this.phoneContacts);

  }
  // getContact(id: number): Book {
  //   const contact = this.phoneContacts.find(c => c.id == id);
  //   const index = this.phoneContacts.findIndex(c => c.id == id);
  //   console.log(id)
  //   if (contact !== undefined) {
  //     this.phoneContacts[index] = contact;
  //   return contact;
    
  //   }throw new Error('Contact not found.');}

  addContact(contact : Book){
    const checker = this.phoneContacts.find(finder =>finder.contactName === contact.contactName)
    if (checker){
      console.log("checker")
      this.updateContact({...checker, ...contact});
    }
    else{
      contact.id = this.phoneContacts.length+1;
      this.phoneContacts.push({...contact})
      
      // this.phoneContacts.push({id : contact.id, contactName: contact.contactName, phoneNumber: contact.phoneNumber, }) 
      // console.log("addcontact inside service")
    }
    
  };

  ClickDelete(contactName : String){
    this.phoneContacts.findIndex((item,index) => 
    {if(item.contactName == contactName) this.phoneContacts.splice(index,1)})
  };

  updateContact(contact: Book){
    console.log(contact)
    const index = this.phoneContacts.findIndex(c => c.id == contact.id);
    this.phoneContacts[index] = contact;
  }
}
