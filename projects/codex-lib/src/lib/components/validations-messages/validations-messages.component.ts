import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-validations-messages',
  imports: [CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './validations-messages.component.html',
  styleUrls: ['./validations-messages.component.scss'],
})
export class SharedValidationsMessagesComponent {
  @Input({ required: true }) errors!: ValidationErrors | null;
}
