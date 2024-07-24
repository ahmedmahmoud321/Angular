import {Component} from '@angular/core';
import {EnrollmentService} from "../services/enrollment.service";

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {

  enrollService = new EnrollmentService()

  OnEnroll() {
    this.enrollService.OnEnrollClicked("JavaScript")
  }

}
