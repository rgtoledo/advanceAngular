import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent {
  // @Input('valueProgress') progress: number = 50;
  @Input() progress: number = 50;
  @Input() color: string = 'btn btn-primary';
  @Output() emitProgress: EventEmitter<string> = new EventEmitter();


  get progressPercent() {
    return `${this.progress}%`
  }

  changeProgress(value: number) {
    this.progress += value;

    if (this.progress > 100)
      this.progress = 100;
    if (this.progress < 0)
      this.progress = 0;

    this.emitProgress.emit(this.progressPercent);
  }

  onChanges(value: number) {

    this.progress = value;

    if (this.progress > 100)
      this.progress = 100

    if (this.progress < 0 || !this.progress)
      this.progress = 0

    this.emitProgress.emit(this.progressPercent);
  }


}
