import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <div>
    <small>{{smallHead}}</small>
    <h2 class="">{{bigHead}}</h2>
  </div>
  `,
  styles: [
    'div { padding: 2em .5em; width: 100%; background-color: transparent}',
    'small { color: var(--HEAD_LIGHT); text-transform: uppercase;}',
    'h2 { color: var(--HEAD_DARK); font-weight: normal; margin-top: .5em; text-transform: uppercase}'
  ]
})
export class HeadingComponent implements OnInit {

  @Input() smallHead: string;
  @Input() bigHead: string;

  constructor() { }

  ngOnInit(): void {
  }

}
