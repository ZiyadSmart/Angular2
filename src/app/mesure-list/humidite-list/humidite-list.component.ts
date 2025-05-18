import { Component, ViewChild } from '@angular/core';
import { HumiditeElementComponent } from '../../mesure-element/humidite-element/humidite-element.component';
import { IDataHumidite } from '../../../model/humidite/data-humidite'; 
import { HttpClient } from '@angular/common/http';
import { HumiditeService } from '../../services/donnes/humidite/humidite.service';
import { Humidite } from '../../../model/humidite/humidite.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHumiditeComponent } from '../../form-mesure/form-humidite/form-humidite.component';

@Component({
  selector: 'app-humidite-list',
  imports: [HumiditeElementComponent, FormHumiditeComponent],
  templateUrl: './humidite-list.component.html',
  styleUrl: './humidite-list.component.css'
})
export class HumiditeListComponent {

  tabHumidite:IDataHumidite[]=[];
    
    
    constructor(private humiditeService: HumiditeService) {}
  
      doGet(): void {
      this.humiditeService.getAll().subscribe((humidite: Humidite[]) => {
        console.log('GET response:', humidite);
        this.tabHumidite = [];
        
        humidite.forEach((humidite: Humidite) => {
          const HumiditeData: IDataHumidite = {
            id: humidite.id,
            value: humidite.value,
            date: humidite.date
          };
          this.tabHumidite.push(HumiditeData);
        });
      });
    }
    
  
    ngOnInit():void{
  
      this.doGet();
  
    }
}
