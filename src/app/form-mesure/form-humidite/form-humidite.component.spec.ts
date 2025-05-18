import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHumiditeComponent } from './form-humidite.component';

describe('FormHumiditeComponent', () => {
  let component: FormHumiditeComponent;
  let fixture: ComponentFixture<FormHumiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHumiditeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHumiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
