import { Component, ViewChild } from '@angular/core';
import { TemperatureElementComponent } from '../../mesure-element/temperature-element/temperature-element.component';
import { IDataTemperature } from '../../../model/temperature/data-temperature'; 
import { HttpClient } from '@angular/common/http';
import { TemperatureService } from '../../services/donnes/temperature/temperature.service';
import { Temperature } from '../../../model/temperature/temperature.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormTempComponent } from '../../form-mesure/form-temp/form-temp.component';

@Component({
  selector: 'app-temperature-list',
  imports: [TemperatureElementComponent, FormTempComponent],
  templateUrl: './temperature-list.component.html',
  styleUrl: './temperature-list.component.css'
})
export class TemperatureListComponent {

  tabTemperature:IDataTemperature[]=[];
  
  
  constructor(private temperatureService: TemperatureService) {}

   doGet(): void {
    this.temperatureService.getAll().subscribe((temperatures: Temperature[]) => {
      console.log('GET response:', temperatures);
      this.tabTemperature = [];
      
      temperatures.forEach((temperature: Temperature) => {
        const tempData: IDataTemperature = {
          id: temperature.id,
          value: temperature.value,
          date: temperature.date
        };
        this.tabTemperature.push(tempData);
      });
    });
  }
  

  ngOnInit():void{

    this.doGet();

  }
  
}
