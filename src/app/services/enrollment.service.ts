import {Injectable} from '@angular/core';


export class EnrollmentService {

  constructor() {
  }
  OnEnrollClicked(title: string) {
    alert("Thank you for enrolling to" + title + " course.")
  }
}
