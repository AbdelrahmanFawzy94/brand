import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { SharedIconComponent } from '../icon/icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lib-chip',
  standalone: true,
  imports: [MatChipsModule, SharedIconComponent, MatTooltipModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class SharedChipComponent {
  @Input() isRemovable: boolean = false;
  @Input() id!: string | number;
  @Input() disabled: boolean = false;
  @Output() onRemove = new EventEmitter<string | number>();

  remove() {
    this.id ? this.onRemove.emit(this.id) : this.onRemove.emit();
  }
}
