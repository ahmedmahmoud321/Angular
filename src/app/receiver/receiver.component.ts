import {Component} from '@angular/core';
import {BridgeService} from "../services/bridge.service";
import {User} from "../sender/sender";

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent {

  user: User = {}


  constructor(private bridgeService: BridgeService) {
    this.bridgeService.userEvent.subscribe((user) => {
      console.log(user);
      this.user = user;

    });
  }

}
