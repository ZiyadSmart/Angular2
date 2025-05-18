import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditeElementComponent } from './humidite-element.component';

describe('HumiditeElementComponent', () => {
  let component: HumiditeElementComponent;
  let fixture: ComponentFixture<HumiditeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumiditeElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumiditeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
