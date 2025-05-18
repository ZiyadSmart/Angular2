import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDataTemperature } from '../../../model/temperature/data-temperature';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Temperature } from '../../../model/temperature/temperature.models';
import { TemperatureService } from '../../services/donnes/temperature/temperature.service';

@Component({
  selector: 'app-form-temp',
  imports: [CommonModule, CommonModule,ReactiveFormsModule ],
  templateUrl: './form-temp.component.html',
  styleUrl: './form-temp.component.css'
})
export class FormTempComponent {

  temperatureForm: FormGroup;
  resultJson: string = '';
  
  constructor(
    private fb: FormBuilder,
    private temperatureService: TemperatureService
  ) {
    // Initialiser le formulaire avec les valeurs par défaut
    this.temperatureForm = this.fb.group({
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
    if (this.temperatureForm.valid) {
      const formValues = this.temperatureForm.value;
      
      // Création d'un objet avec les valeurs du formulaire
      const temperatureData: IDataTemperature = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Création d'une instance de Temperature à partir des données
      const temperature = Temperature.fromJson(temperatureData);
      
      // Conversion en JSON pour l'affichage
      this.resultJson = JSON.stringify(temperature.toJson(), null, 2);
    }
  }
  
  // Ajouter une température
  addTemperature(): void {
    if (this.temperatureForm.valid) {
      const formValues = this.temperatureForm.value;
      
      const temperatureData: IDataTemperature = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Conversion de IDataTemperature à Temperature
      const newTemp = Temperature.fromJson(temperatureData);
      this.temperatureService.add(newTemp).subscribe((result: Temperature) => {
        console.log('Température ajoutée:', result);
        this.resultJson = JSON.stringify(result.toJson(), null, 2);
      });
    }
  }

  // Mettre à jour une température
  updateTemperature(): void {
    if (this.temperatureForm.valid) {
      const formValues = this.temperatureForm.value;
      
      const temperatureData: IDataTemperature = {
        id: Number(formValues.id),
        value: Number(formValues.value),
        date: new Date(formValues.date)
      };
      
      // Conversion de IDataTemperature à Temperature
      const tempToUpdate = Temperature.fromJson(temperatureData);
      this.temperatureService.update(tempToUpdate).subscribe((result: Temperature) => {
        console.log('Température mise à jour:', result);

        this.resultJson = JSON.stringify(result.toJson(), null, 2);
      });
    }
  }
  
}