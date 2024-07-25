import {Component} from '@angular/core';
import {BridgeService} from "../services/bridge.service";
import {User} from "./sender";

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {

  users = this.bridgeService.users;

  constructor(private bridgeService: BridgeService) {

  }


  sendUser(user: User) {
    this.bridgeService.sendUser(user);

  }
}
