import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../sender/sender";

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() {
  }


  users: User[] = [
    {
      name: 'John Doe',
      email: 'a@gmail.com'
    },
    {
      name: 'Jane Doe',
      email: 'b@gmail.com'
    },
    {
      name: 'John Smith',
      email: 'c@gmail.com'
    },
    {
      name: 'Jane Smith',
      email: 'd@gmail.com'
    }]

  userEvent = new EventEmitter<User>();

  sendUser(user: User) {
    this.userEvent.emit(user);
  }


}


