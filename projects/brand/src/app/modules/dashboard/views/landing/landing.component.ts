import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedIconComponent } from '@library';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dashboard-landing',
  standalone: true,
  imports: [
    CommonModule,
    //  TranslateModule,
    SharedIconComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  constructor() {}

  // private _Translate: TranslateService

  // currentLang = 'en';
  // changeLang() {
  //   if (this.currentLang === 'en') {
  //     this._Translate.use('ar');
  //     this.currentLang = 'ar';
  //   } else {
  //     this._Translate.use('en');
  //     this.currentLang = 'en';
  //   }
  // }
}
