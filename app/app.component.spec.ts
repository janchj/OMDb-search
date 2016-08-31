import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App', () => {
  it('should have an instance',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
}); 