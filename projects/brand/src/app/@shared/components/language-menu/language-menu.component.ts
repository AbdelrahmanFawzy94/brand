import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ILanguage } from '@library';
import { TranslateService } from '@ngx-translate/core';

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
  @Input() showLangLabel: boolean = false;

  languages: ILanguage[] = [
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
  selectedLanguage: ILanguage = this.languages[1];

  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {
    this.getCurrentLanguage();
  }

  selectLanguage(language: ILanguage) {
    this.selectedLanguage = language;
    this._TranslateService.use(language.language);
  }

  getCurrentLanguage() {
    let currentLanguage = this._TranslateService.currentLang;
    this.selectedLanguage = this.languages.find((lang) => lang.language == currentLanguage)!;
  }
}
