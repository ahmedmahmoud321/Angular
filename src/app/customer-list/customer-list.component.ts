import { Component } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

    selectedCustomer : Customer = new Customer();


  customers : Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', city: 'Anytown', state: 'Anystate', zip: '12345', country: 'USA' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321', address: '456 Main St', city: 'Anytown', state: 'Anystate', zip: '67890', country: 'USA' },
    { id: 2, name: 'Ahmed Ali', email: 'jane@example.com', phone: '098-765-4321', address: '456 Main St', city: 'Anytown', state: 'Anystate', zip: '67890', country: 'USA' },
    { id: 2, name: 'Ali Ahmed', email: 'jane@example.com', phone: '098-765-4321', address: '456 Main St', city: 'Anytown', state: 'Anystate', zip: '67890', country: 'USA' }


]


}
