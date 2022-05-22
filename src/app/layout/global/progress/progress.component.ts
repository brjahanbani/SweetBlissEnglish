import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input() currentStep: 1 | 2 | 3 | 4 = 1;
  @Input() steps = [2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
