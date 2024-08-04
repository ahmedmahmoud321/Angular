import { Injectable } from '@angular/core';
import {Solution} from "./models/Solution";

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor() { }

  solutions: Solution[] = [
    {id: 1, name: 'Angular', description: 'Angular is a platform for building mobile and desktop web applications.'},
    {id: 2, name: 'React', description: 'A JavaScript library for building user interfaces.'},
    {id: 3, name: 'Vue', description: 'The Progressive JavaScript Framework.'},
    {id: 4, name: 'Node', description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'},
  ];

  getSolutions(): Solution[] {
    return this.solutions;
  }

  getSolution(id: number): Solution | undefined {
    return this.solutions.find(s => s.id === id);
  }

}
