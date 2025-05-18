import { HttpClient } from '@angular/common/http';
import { Component, Input, input } from '@angular/core';
import { ButtonDeleteComponent } from '../../button-delete/button-delete.component';

@Component({
  selector: 'app-humidite-element',
  imports : [ButtonDeleteComponent],
  templateUrl: './humidite-element.component.html',
  styleUrl: './humidite-element.component.css'
})
export class HumiditeElementComponent {

  @Input() id: number = 1;
  @Input() value: number = 20;
  @Input() date: Date = new Date('2025-05-15');
}
