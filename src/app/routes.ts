import { Routes } from "@angular/router";
import { CityComponent } from "./city/city.component";
import { ValueComponent } from "./value/value.component";
import { CityDeteailComponent } from "./city/city-deteail/city-deteail.component";
import { CityAddComponent } from "./city/city-add/city-add.component";
import { RegisterComponent } from "./register/register.component";

export const appRoutes: Routes = [
    { path: "city", component: CityComponent },
    { path: "value", component: ValueComponent },
    { path: "cityDetail/:cityId", component: CityDeteailComponent },
    { path: "cityadd", component: CityAddComponent },
    { path: "register", component: RegisterComponent},
    { path: "**", redirectTo: "city", pathMatch: "full" }

]