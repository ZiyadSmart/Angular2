import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditeDeleteComponent } from './humidite-delete.component';

describe('HumiditeDeleteComponent', () => {
  let component: HumiditeDeleteComponent;
  let fixture: ComponentFixture<HumiditeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumiditeDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumiditeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
