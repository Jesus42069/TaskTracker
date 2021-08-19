import { TestBed } from '@angular/core/testing';

import { TaskHolderServiceService } from './task-holder-service.service';

describe('TaskHolderServiceService', () => {
  let service: TaskHolderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskHolderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
