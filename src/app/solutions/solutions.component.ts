import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  solutionId: any;


  ngOnInit(): void {
    // this.solutionId = this.activatedRoute.snapshot.paramMap.get('id')
    this.solutionId = this.activatedRoute.snapshot.params['id'];
  }


}
