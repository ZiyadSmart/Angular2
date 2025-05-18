import { Component, Input } from '@angular/core';
import { HumiditeService } from '../../services/donnes/humidite/humidite.service';

@Component({
  selector: 'app-humidite-delete',
  imports: [],
  templateUrl: './humidite-delete.component.html',
  styleUrl: './humidite-delete.component.css'
})
export class HumiditeDeleteComponent {

  constructor(private humiditeService: HumiditeService) {}
    @Input() id!: number;
    
  humiditedoDelete(id: number): void {
    this.humiditeService.delete(id).subscribe(() => {
      console.log('Température supprimée, id:', id);
    });
  }
}
