import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent }, // Route for "/map"
  { path: '', redirectTo: '/map', pathMatch: 'full' } // Redirect from "/" to "/map"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
