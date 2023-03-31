import { Component } from '@angular/core';

interface Graph {
  label: string[];
  data: number[];
  backgroundColor: string[];
}

@Component({
  selector: 'app-grahp1',
  templateUrl: './grahp1.component.html',
  styleUrls: ['./grahp1.component.scss']
})
export class Grahp1Component {

  graph2: Graph = {
    label: ['here', 'there', 'anywhere'],
    data: [300, 23, 500],
    backgroundColor: ['green', 'black', 'blue']
  }
  graph3: Graph = {
    label: ['here', 'there', 'anywhere'],
    data: [700, 130, 400],
    backgroundColor: ['pink', 'red', 'gray']
  }
  graph4: Graph = {
    label: ['here', 'there', 'anywhere'],
    data: [320, 44, 30],
    backgroundColor: ['yellow', 'purple', 'orange']
  }

}
