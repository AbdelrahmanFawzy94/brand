// import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@shared';
// import {  } from 'ssr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private _LoaderService: LoaderService) {
    // window.localStorage.setItem('a', 'aa');
  }

  ngOnInit(): void {
    this.initializeGeneralLoader();
  }
  // .pipe(untilDestroyed(this))
  initializeGeneralLoader() {
    this._LoaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
