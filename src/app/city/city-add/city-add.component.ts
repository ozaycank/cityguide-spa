import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityService: CityService, private formBuilder: FormBuilder) {
    this.createCityForm();

  }
  city!: City;
  cityAddForm!: FormGroup;
  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  add() {
    if (this.cityAddForm.valid) {
      this.city = Object.assign({}, this.cityAddForm.value);
      this.city.userId = 1;
      this.cityService.add(this.city)
    }
  }
}
