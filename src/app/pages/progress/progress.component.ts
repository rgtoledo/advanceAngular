import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  progressPercent: string = '88%'
  progressPercent2: string = '50%'

  modifyProgress(value: string, who: number) {
    if (who == 1)
      this.progressPercent = value;
    if (who == 2)
      this.progressPercent2 = value;
  }

}
