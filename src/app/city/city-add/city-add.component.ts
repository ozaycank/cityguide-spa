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
      this.cityService.add(this.city).subscribe(
        (response:any) => {
          // Handle success
          console.log('City added successfully:', response);
          // Optionally, you can navigate to another page or show a success message.
          // Example of navigating to a different route:
          // this.router.navigate(['/city']); // Don't forget to import Router from '@angular/router'
        },
        (error:any) => {
          // Handle errors
          console.error('Error adding city:', error);
          // Optionally, you can show an error message to the user.
        }
      );
    }
  }
  
}
