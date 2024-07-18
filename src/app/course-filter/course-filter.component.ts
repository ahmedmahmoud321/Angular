import {Component, EventEmitter, Input, Output} from '@angular/core';
import {filter} from "rxjs";

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent {

  filter = 'all'

  // log the size of the courses


  @Input() allCourses = 0;
  @Input() availableCourses = 0;
  @Input() unavailableCourses = 0;

  @Output() filterChange = new EventEmitter<string>();

  onRadioChange() {
    this.filterChange.emit(this.filter);
    console.log(this.filter);
  }


}
