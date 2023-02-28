
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './components/addcontact/addcontact.component';
import { DeletecontactComponent } from './components/deletecontact/deletecontact.component';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';



const routes: Routes = [
    {path: '', component: AddcontactComponent},
    {path: '', component: DeletecontactComponent},
    {path: '', component: PhoneBookComponent},
    {path: 'update/:id', component: UpdatecontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }