import {Component} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses = [{
    id: 1,
    title: 'Introduction to Angular',
    description: 'Learn the basics of Angular framework.',
    instructor: 'John Doe',
    isAvailable: true
  },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Dive deeper into Angular and learn advanced concepts.',
      instructor: 'Jane Smith',
      isAvailable: false
    },
    {
      id: 3,
      title: 'RxJS in Angular',
      description: 'Understand reactive programming with RxJS in Angular.',
      instructor: 'Mike Johnson',
      isAvailable: true
    }
  ];

  getAvailableCourses() {
    return this.courses.filter(course => course.isAvailable).length;
  }

  getUnavailableCourses() {
    return this.courses.filter(course => !course.isAvailable).length;
  }
}
