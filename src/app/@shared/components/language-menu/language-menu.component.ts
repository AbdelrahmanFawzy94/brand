import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@shared';

@Component({
  selector: 'shared-language-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
})
export class SharedLanguageMenuComponent implements OnInit {
  @Input() buttonClasses: string = '';
  @Input() menuClasses: string = '';
  @Input() showCurrentLang: boolean = false;

  languages: Language[] = [
    {
      language: 'ar',
      displayedanguage: 'العربية',
      img: 'assets/images/languages/ar.jpg',
    },
    {
      language: 'en',
      displayedanguage: 'En',
      img: 'assets/images/languages/en.jpg',
    },
  ];
  selectedLanguage: Language = this.languages[1];

  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this.getCurrentLanguage();
  }

  selectLanguage(language: Language) {
    this.selectedLanguage = language;
    this._TranslateService.use(language.language);
  }

  getCurrentLanguage() {
    let currentLanguage = this._TranslateService.currentLang;
    this.selectedLanguage = this.languages.find((lang) => lang.language == currentLanguage)!;
  }
}
