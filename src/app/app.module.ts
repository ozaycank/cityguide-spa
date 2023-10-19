import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent} from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CityDeteailComponent } from './city/city-deteail/city-deteail.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {AlertifyServiceService} from './services/alertify-service.service'
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [	
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDeteailComponent,
    ImageGalleryComponent,
    CustomModalComponent,
    CityAddComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AlertifyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
