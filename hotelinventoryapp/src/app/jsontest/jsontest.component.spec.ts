import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontestComponent } from './jsontest.component';

describe('JsontestComponent', () => {
  let component: JsontestComponent;
  let fixture: ComponentFixture<JsontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsontestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
