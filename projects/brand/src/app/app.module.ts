import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from '@committee-app/app-routing.module'; //TODO remove app-routing.module
import { AppComponent } from '@committee-app/app.component'; //TODO remove app.component
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedGeneralLoaderComponent } from '@library';
import { ApisInterceptor } from './@core/http/apis.interceptor';
import { TranslationLoader } from './@core/translation/translationLoader';
import { TranslationLoaderService } from './@core/translation/translation-loader.service';

// from server
export function createTranslateLoader(http: HttpClient) {
  return new TranslationLoader(http, new TranslationLoaderService());
}

// from client
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'ar',
    }),
    SharedGeneralLoaderComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApisInterceptor,
      multi: true,
    },
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
