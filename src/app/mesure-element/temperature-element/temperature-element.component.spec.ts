import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureElementComponent } from './temperature-element.component';

describe('TemperatureElementComponent', () => {
  let component: TemperatureElementComponent;
  let fixture: ComponentFixture<TemperatureElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
