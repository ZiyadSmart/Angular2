import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDeleteComponent } from './temperature-delete.component';

describe('ButtonDeleteComponent', () => {
  let component: TemperatureDeleteComponent;
  let fixture: ComponentFixture<TemperatureDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
