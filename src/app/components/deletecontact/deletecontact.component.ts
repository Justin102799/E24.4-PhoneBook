import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { ContactbookService } from 'src/app/service/contactbook.service';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent {
  phoneContacts: Book[] = [];
  selectedName = '';

  constructor(private contactBookService : ContactbookService ) { }

  ngOnInit() {
    this.contactBookService.getContacts().subscribe(res => {
      this.phoneContacts = res;
    })
  }

  ClickDelete(contactName : String){
  this.contactBookService.ClickDelete(contactName);
  }
}
