import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { ContactbookService } from 'src/app/service/contactbook.service';


@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  phoneContacts: Book = {
    id: 0,
    contactName: '',
    phoneNumber: ''
  };
  public contact : any;

  

  constructor(private route: ActivatedRoute, private contactBookService : ContactbookService, private router: Router ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.contactBookService.getContact(id)
    // console.log( this.contactBookService.getContact(id))
    }
  

  // updateContact(contactName: String, phoneNumber: String){
  //   this.contactBookService.updateContact({...this.phoneContacts, contactName, phoneNumber});
  //   this.router.navigateByUrl('/');
  // }
  // updateContact(contact : String){
  //   this.phoneContacts.findIndex((item,index) => 
  //   {if(item.contactName == contact) })
  // };
}
