import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component'; // <-- NgModel lives here
import { InputsComponent } from './inputs/inputs.component';
import { MostRatedRecipesComponent } from './most-rated-recipes/most-rated-recipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { VideoGamesComponent } from './video-games/video-games.component';

const routes: Routes = [
	{path: 'charts', component: ChartsComponent},
	{path: 'inputs', component: InputsComponent},
	{path: 'most-rated-recipes', component: MostRatedRecipesComponent},
	{path: 'register', component: RegistrationComponent},
	{path: 'all-recipes', component: AllRecipesComponent},
	{path: 'video-games', component: VideoGamesComponent},
	{path: '', redirectTo: '/most-rated-recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
