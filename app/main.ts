import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provide } from '@angular/core';
import 'rxjs/Rx';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideRouter(AppRoutes),
  provide(APP_BASE_HREF, {useValue : '/' })
]);