import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDataHumidite } from '../../../model/humidite/data-humidite';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Humidite } from '../../../model/humidite/humidite.models';
import { HumiditeService } from '../../services/donnes/humidite/humidite.service';

@Component({
  selector: 'app-form-humidite',
  imports: [CommonModule, CommonModule,ReactiveFormsModule ],
  templateUrl: './form-humidite.component.html',
  styleUrl: './form-humidite.component.css'
})
export class FormHumiditeComponent {

  humiditeForm: FormGroup;
  resultJson: string = '';
  
  constructor(
    private fb: FormBuilder,
    private humiditeService: HumiditeService
  ) {
    // Initialiser le formulaire avec les valeurs par défaut
    this.humiditeForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(0)]],
      value: [20, [Validators.required]],
      date: [this.formatDate(new Date('2025-05-15')), [Validators.required]]
    });
  }
  
  // Formater la date au format YYYY-MM-DD pour l'input date
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  onSubmit(): void {
    if (this.humiditeForm.valid) {
      const formValues = this.humiditeForm.value;
      
      // Création d'un objet avec les valeurs du formulaire
      const humiditeData: IDataHumidite = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Création d'une instance de Humidite à partir des données
      const humidite = Humidite.fromJson(humiditeData);
      
      // Conversion en JSON pour l'affichage
      this.resultJson = JSON.stringify(humidite.toJson(), null, 2);
    }
  }
  
  // Ajouter une température
  addHumidite(): void {
    if (this.humiditeForm.valid) {
      const formValues = this.humiditeForm.value;
      
      const humiditeData: IDataHumidite = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Conversion de IDataHumidite à Humidite
      const newTemp = Humidite.fromJson(humiditeData);
      this.humiditeService.add(newTemp).subscribe((result: Humidite) => {
        console.log('Température ajoutée:', result);
        this.resultJson = JSON.stringify(result.toJson(), null, 2);
      });
    }
  }

  // Mettre à jour une température
  updateHumidite(): void {
    if (this.humiditeForm.valid) {
      const formValues = this.humiditeForm.value;
      
      const humiditeData: IDataHumidite = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Conversion de IDataHumidite à Humidite
      const humiditeToUpdate = Humidite.fromJson(humiditeData);
      this.humiditeService.update(humiditeToUpdate).subscribe((result: Humidite) => {
        console.log('Température mise à jour:', result);

        this.resultJson = JSON.stringify(result.toJson(), null, 2);
      });
    }
  }
}
