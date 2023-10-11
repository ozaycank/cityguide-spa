import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { Photo } from 'src/app/models/photo';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = []; // Store image URLs
  modalIsOpen: boolean = false;
  modalImageUrl: string = '';


  constructor(private cityService: CityService, private modalService: ModalService) {}

  ngOnInit() {
    // Replace 1 with the actual cityId you want to load images for
    this.loadImagesForCity(1);
    this.modalService.modalStatus.subscribe((isOpen) => {
      this.modalIsOpen = isOpen;
    });
  }

  loadImagesForCity(cityId: number) {
    this.cityService.getPhotosByCity(cityId).subscribe((photos: Photo[]) => {
      // Assuming your Photo model has a property named 'photoUrl'
      this.images = photos.map((photo: Photo) => photo.url);
    });
  }

  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
    this.modalService.openModal(imageUrl);
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
