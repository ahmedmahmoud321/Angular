import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute) {
  }


  solutionId: any;
  paramsObservable: any;
  passedQueryParam = '';


  ngOnInit(): void {
    // this.solutionId = this.activatedRoute.snapshot.paramMap.get('id')
    // this.solutionId = this.activatedRoute.snapshot.params['id'];
    this.paramsObservable = this.activatedRoute.paramMap.subscribe((param) => {
      this.solutionId = param.get('id');

    })

    this.activatedRoute.queryParams.subscribe((queryParam) => {
        this.passedQueryParam = queryParam['location'];
      }
    )
  }

  ngOnDestroy(): void {
    this.paramsObservable.unsubscribe();
  }


}
