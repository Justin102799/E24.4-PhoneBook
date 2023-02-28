import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { CONTACTS } from 'src/app/mock-phoneBook/mock-phoneBook';
import { ContactbookService } from 'src/app/service/contactbook.service';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent {
  phoneContacts: Book[] = [];
  list = CONTACTS;
  
  // phoneContacts = CONTACTS;
  // newId = 0;
  // newContactName = '';
  // newPhoneNumber = '';
  // selectedPhoneContacts?: Book;
  
  // addContact(){
  //     const id = uuid.v4()
  //     this.phoneContacts.push({id, contactName: this.newContactName, phoneNumber: this.newPhoneNumber, }) 
  //     console.log (id);
  //   };
  constructor(private contactBookService : ContactbookService) { }

  ngOnInit() {
    this.contactBookService.getContacts().subscribe(res => {
      this.phoneContacts = res;
    })
    console.log(this.phoneContacts)
   
    
  }

  // ClickDelete(telNumber: Book){
  //   var index = this.phoneContacts.indexOf(telNumber) 
  //   if(index !== -1){
  //     this.phoneContacts.splice(index, 1)
  //   }
  // };

  // updateContact(contact: Book){
  //   this.selectedPhoneContacts = contact;
  // }

  }

