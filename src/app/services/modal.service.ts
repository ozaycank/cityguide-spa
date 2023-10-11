// modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalStatus = new Subject<boolean>();
  imageUrl: string = '';

  openModal(imageUrl: string) {
    this.imageUrl = imageUrl;
    this.modalStatus.next(true);
  }

  closeModal() {
    this.modalStatus.next(false);
  }
}
