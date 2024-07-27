import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCalendarCellClassFunction, MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput, MatInputModule } from '@angular/material/input';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedIconComponent, SharedValidationsMessagesComponent, SharedStopProbagationDirective, IDisabledDates } from '@library';

@UntilDestroy()
@Component({
  selector: 'lib-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    TranslateModule,
    SharedStopProbagationDirective,
    SharedIconComponent,
    SharedValidationsMessagesComponent,
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class SharedDatepickerComponent implements OnInit {
  @Input({ required: true }) label: string = '';
  @Input() passedFormControl!: FormControl;
  @Input() hint: string = '';
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @Input() lastIcon: string = 'event';
  @Input() hideValidation: boolean = false;
  @Input() isFullscreen: boolean = false;
  @Input() hasHijri: boolean = false;
  @Input() startView: 'month' | 'multi-year' | 'year' = 'month';
  @Input() startAt: Date = new Date(Date.now());
  @Input() minDate: Date = new Date('1/1/1000');
  @Input() maxDate: Date = new Date('1/1/3000');
  @Input() set IDisabledDates(value: IDisabledDates) {
    // convert to date to valid date for new Date()
    value.days = value.days.map((day) => {
      let split = day.split('/');
      let secondItem = split[1];
      split[1] = split[0];
      split[0] = secondItem;
      let joined = split.join('/');
      return joined;
    });

    this.datesFilter = (d: Date | null) => {
      const day = (d || new Date()).getDay();
      const month = (d || new Date()).getMonth();
      const year = (d || new Date()).getFullYear();
      const time = (d || new Date()).getTime();

      return (
        !value.years.find((x) => x == year) &&
        !value.yearMonths.find((x) => x == month) &&
        !value.weekDay.find((x) => x == day) &&
        !value.days.find((x) => new Date(x).getTime() == time)
      );
    };
  }

  // TODO add classes later
  // @Input() set addClass(value: IDisabledDates) {
  // }
  @Output() onSelection = new EventEmitter<Date>();

  currentLang: string = 'en';
  datepickerLocalization: string = 'en'; //ar-sa => hijri

  constructor(private _DateAdapter: DateAdapter<any>, private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this.changeDatePickerLanguage();
    //
    // setTimeout(() => {
    //   this.datesFilter = (d: Date | null) => {
    //     const day = (d || new Date()).getDay();
    //     return day !== 2;
    //   };
    // }, 10000);
  }

  changeDatePickerLanguage() {
    this.currentLang = this._TranslateService.currentLang;
    this._TranslateService.onLangChange.pipe(untilDestroyed(this)).subscribe((LangChangeEvent) => {
      this.currentLang = LangChangeEvent.lang;
      this.datepickerLocalization = LangChangeEvent.lang;
      this._DateAdapter.setLocale(this.datepickerLocalization);
    });
  }

  toggleDatepickerHijri(MatDatepicker: MatDatepicker<any>) {
    switch (this.datepickerLocalization) {
      case 'ar-sa':
        if (this.currentLang === 'ar') {
          this.datepickerLocalization = 'ar';
        } else {
          this.datepickerLocalization = 'en';
        }
        break;
      default:
        this.datepickerLocalization = 'ar-sa';
        break;
    }

    (this._DateAdapter as NativeDateAdapter).setLocale(this.datepickerLocalization);
    MatDatepicker.close();
    // replace setTimeout with on animation end for datepicker closing
    setTimeout(() => {
      MatDatepicker.open();
    }, 200);
  }

  // reactive form input
  clearControl() {
    this.passedFormControl.reset();
  }

  // static input
  clearInput(event: MatInput) {
    event.value = '';
  }

  onSelectionEmit(event: MatDatepickerInputEvent<Date>) {
    this.onSelection.emit(event.value!);
  }

  //
  focusOutInput(event: MatInput) {
    ((event as any)._elementRef as ElementRef<HTMLInputElement>).nativeElement.blur(); // TODO enhance later
  }

  datesFilter = (d: Date | null) => {
    return true;
  };

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    console.warn(cellDate);

    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'bg-info-light-35' : '';
    }

    return '';
  };
}
