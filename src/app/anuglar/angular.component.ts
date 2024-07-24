import {Component} from '@angular/core';
import {EnrollmentService} from "../services/enrollment.service";

@Component({
  selector: 'app-anuglar',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollmentService]
})
export class AngularComponent {

  constructor(private enrollService: EnrollmentService) {
  }


  OnEnroll() {
    this.enrollService.OnEnrollClicked("Angular")
  }
}
