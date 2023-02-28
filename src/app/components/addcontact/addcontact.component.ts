import { Component, ViewChild } from '@angular/core';
import { ContactbookService } from 'src/app/service/contactbook.service';
import { Book } from 'src/app/interfaces/book';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { DeletecontactComponent } from '../deletecontact/deletecontact.component';
import { CONTACTS } from 'src/app/mock-phoneBook/mock-phoneBook';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent {
  phoneContacts: Book[] = [];
  newId = 0;
  newContactName = '';
  newPhoneNumber = '';
  @ViewChild(DeletecontactComponent) deleteContact : DeletecontactComponent | undefined;

  constructor(private contactBookService : ContactbookService, private router: Router) { }

  ngOnInit() {
    this.contactBookService.getContacts().subscribe(res => {
      this.phoneContacts = res;
      this.newId = this.phoneContacts.length;
    })
  }
  newPhoneContacts: Book = {
    id : this.newId,
    contactName : this.newContactName,
    phoneNumber : this.newPhoneNumber,
    
    }

  addContact(){
    
    this.contactBookService.addContact({ id : this.newId,
      contactName : this.newContactName,
      phoneNumber : this.newPhoneNumber, } as Book);
      this.router.navigateByUrl('/');
      this.ngOnInit()
  }


  }


