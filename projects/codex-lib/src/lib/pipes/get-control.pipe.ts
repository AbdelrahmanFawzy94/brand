import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Pipe({
  name: 'getControl',
  standalone: true,
})
export class GetControlPipe implements PipeTransform {
  transform(form: UntypedFormGroup, key: string): UntypedFormControl {
    return form.get(key) as UntypedFormControl;
  }
}
