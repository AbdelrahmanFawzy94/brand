import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralLoaderComponent } from './general-loader.component';

describe('GeneralLoaderComponent', () => {
  let component: GeneralLoaderComponent;
  let fixture: ComponentFixture<GeneralLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralLoaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
