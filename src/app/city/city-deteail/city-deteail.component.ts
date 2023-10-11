import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-deteail',
  templateUrl: './city-deteail.component.html',
  styleUrls: ['./city-deteail.component.css'],
  providers: [CityService],
})
export class CityDeteailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService) {}
  city: City = new City;
  image: string = ''; // Add this line to store the image URLs

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCityById(params['cityId']);
    });
  }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe((data) => {
      this.city = data;
      this.image = data.photoUrl; // Assign the image URLs to the 'images' array
    });
  }
}
