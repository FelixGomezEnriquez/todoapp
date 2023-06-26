import {
  Component,
  Input,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../task';
import { MatCheckbox } from '@angular/material/checkbox';
import { states } from '../states';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() newState: EventEmitter<{ state: states; id: number }> =
    new EventEmitter<{ state: states; id: number }>();
  @ViewChild('checkbox') checkbox!: MatCheckbox;

  ngAfterViewInit() {
    if (this.task.state == 'complete') {
      this.checkbox.checked = true;
      this.checkbox._elementRef.nativeElement.style =
        'text-decoration: line-through; ';
      this.newState.emit({ state: states.complete, id: this.task.id });
    } else if (this.task.state == 'active') {
      this.checkbox.checked = false;
      this.checkbox._elementRef.nativeElement.style = 'text-decoration: none; ';
      this.newState.emit({ state: states.active, id: this.task.id });
    }
  }

  updateTask(checkbox: MatCheckbox): void {
    console.log(checkbox.checked);
    if (checkbox.checked) {
      checkbox.checked = true;
      checkbox._elementRef.nativeElement.style =
        'text-decoration: line-through; ';
      this.newState.emit({ state: states.complete, id: this.task.id });
    } else if (!checkbox.checked) {
      checkbox.checked = false;
      checkbox._elementRef.nativeElement.style = 'text-decoration: none; ';
      this.newState.emit({ state: states.active, id: this.task.id });
    }
  }
}
