import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { TemperatureService } from '../../services/donnes/temperature/temperature.service';

@Component({
  selector: 'app-temp-delete',
  imports: [],
  templateUrl: './temperature-delete.component.html',
  styleUrl: './temperature-delete.component.css'
})
export class TemperatureDeleteComponent {

  constructor(private temperatureService: TemperatureService) {}
    @Input() id!: number;
    
  tempdoDelete(id: number): void {
    this.temperatureService.delete(id).subscribe(() => {
      console.log('Température supprimée, id:', id);
    });
  }

}
