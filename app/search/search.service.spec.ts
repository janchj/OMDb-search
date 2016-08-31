import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';
import { provide } from '@angular/core';

import { SearchService } from './search.service';

describe('SearchService', () => {

  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    SearchService,
    provide(Http, {
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
    })
  ]);

  it('should have an instance',
    inject([SearchService], (service: SearchService) => {
      expect(service).toBeTruthy();
    }));

});