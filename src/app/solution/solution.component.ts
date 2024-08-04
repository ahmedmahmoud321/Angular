import {Component, OnInit} from '@angular/core';
import {SolutionsService} from "../solutions.service";
import {ActivatedRoute} from "@angular/router";
import {Solution} from "../models/Solution";

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  solution: Solution | undefined;


  constructor(private solutionService: SolutionsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.solution = this.solutionService.getSolution(Number(params['id']));
      console.log(this.solution);
    });
  }




}
