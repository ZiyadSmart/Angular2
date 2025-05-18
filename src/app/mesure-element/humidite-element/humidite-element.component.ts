import { HttpClient } from '@angular/common/http';
import { Component, Input, input } from '@angular/core';
import { HumiditeDeleteComponent } from '../../button-delete/humidite-delete/humidite-delete.component';

@Component({
  selector: 'app-humidite-element',
  imports : [HumiditeDeleteComponent],
  templateUrl: './humidite-element.component.html',
  styleUrl: './humidite-element.component.css'
})
export class HumiditeElementComponent {

  @Input() id: number = 1;
  @Input() value: number = 20;
  @Input() date: Date = new Date('2025-05-15');
}
