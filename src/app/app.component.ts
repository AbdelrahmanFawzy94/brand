// import { environment } from './../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map, merge, switchMap } from 'rxjs';
import { LoaderService, LocalStorageService } from '@shared';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private _LoaderService: LoaderService,
    private _LocalStorageService: LocalStorageService,
    private _Title: Title,
    private _ActivatedRoute: ActivatedRoute,
    private _TranslateService: TranslateService,
    private _Router: Router,
    @Inject(DOCUMENT)
    private _Document: Document
  ) {
    // window.localStorage.setItem('a', 'aa');
  }

  ngOnInit(): void {
    this.initializeGeneralLoader();
    this.setCurrentLanguage();
    this.changeBrowserTapTitle();
    this.setBodyDirection();
  }
  initializeGeneralLoader() {
    this._LoaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  // TODO
  setCurrentLanguage() {
    this._TranslateService.use('en');
  }

  // TODO
  setBodyDirection() {
    this._TranslateService.onLangChange.subscribe((LangChangeEvent) => {
      switch (LangChangeEvent.lang) {
        case 'ar':
          this._Document.body.dir = 'rtl';
          break;
        default:
          this._Document.body.dir = 'ltr';
      }
    });
  }

  // Change page title on navigation or language change, based on route data
  changeBrowserTapTitle() {
    const onNavigationEnd = this._Router.events.pipe(filter((event) => event instanceof NavigationEnd));
    merge(this._TranslateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          // TODO test this map and filter (remove uneeded code)
          let route = this._ActivatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((routeData) => {
        const title = routeData['title'];
        if (title) {
          this._Title.setTitle(this._TranslateService.instant(`browser_tap_name.${title}`));
        }
      });
  }
}
