import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureListComponent } from './mesure-list/temperature-list/temperature-list.component';
import { HumiditeListComponent } from './mesure-list/humidite-list/humidite-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemperatureListComponent, HumiditeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular2';
  
}
