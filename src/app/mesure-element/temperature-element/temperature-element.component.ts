import { HttpClient } from '@angular/common/http';
import { Component, Input, input } from '@angular/core';
import { TemperatureDeleteComponent } from '../../button-delete/temperature-delete/temperature-delete.component';

@Component({
  selector: 'app-temperature-element',
  imports : [TemperatureDeleteComponent],
  templateUrl: './temperature-element.component.html',
  styleUrl: './temperature-element.component.css'
 
})
export class TemperatureElementComponent {

  @Input() id: number = 1;
  @Input() value: number = 20;
  @Input() date: Date = new Date('2025-05-15');

}



