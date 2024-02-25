import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module'; //TODO remove app-routing.module
import { AppComponent } from '@app/app.component'; //TODO remove app.component
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedGeneralLoaderComponent } from '@shared';
import { lastValueFrom } from 'rxjs';

// from server
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslationLoader(new TranslationLoaderService(), http);
// }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    SharedGeneralLoaderComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
