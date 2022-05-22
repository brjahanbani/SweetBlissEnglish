import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

export interface Step {
  label: string;
  stepId: number;
  route?: string;
  disabled: boolean;
  queryParams: {
    id?: number;
    step?: number;
  };
}
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgressComponent implements OnInit {
  @Input() public totalSteps!: Step[]; // chanta step has kolan
  @Input() public currentStepId!: number; // id e stepe feli k faale
  @Input() public maxIdEnabled!: number; // bozorg tarin stepi ke mitavanad faal bashad
  @Input() public disabledBtns = false;
  @Output() public StepChangeEvent = new EventEmitter();
  @Input() draftId: any;
  @Input() isPrimary: any;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  changeRoute(step: { stepId: number }) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        step: step.stepId,
        draftId: this.draftId,
      },
    };
    this.currentStepId = step.stepId;
    this.StepChangeEvent.emit(step.stepId);
    console.log('object :>> ', this.router.url);
    const route = this.router.url.split('?')[0];
    this.router.navigate([route], navigationExtras);
  }
}
