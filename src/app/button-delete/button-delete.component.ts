import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { TemperatureService } from '../services/donnes/temperature/temperature.service';

@Component({
  selector: 'app-button-delete',
  imports: [],
  templateUrl: './button-delete.component.html',
  styleUrl: './button-delete.component.css'
})
export class ButtonDeleteComponent {

    constructor(private temperatureService: TemperatureService) {}
    @Input() id!: number;
    
    doDelete(id: number): void {
    this.temperatureService.delete(id).subscribe(() => {
      console.log('Température supprimée, id:', id);
    });
  }
}
