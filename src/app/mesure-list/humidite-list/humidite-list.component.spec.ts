import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditeListComponent } from './humidite-list.component';

describe('HumiditeListComponent', () => {
  let component: HumiditeListComponent;
  let fixture: ComponentFixture<HumiditeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumiditeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumiditeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
