import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';
import { provide } from '@angular/core';

import { TitleSearchService } from './title-search.service';

describe('SearchService', () => {

  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    TitleSearchService,
    provide(Http, {
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
    })
  ]);

  it('should have an instance',
    inject([TitleSearchService], (service: TitleSearchService) => {
      expect(service).toBeTruthy();
    }));

});