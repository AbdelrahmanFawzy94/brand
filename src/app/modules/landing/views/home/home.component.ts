import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '@shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    //  TranslateModule,
    IconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
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
