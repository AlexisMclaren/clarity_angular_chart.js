import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputsComponent } from './inputs/inputs.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component'; // <-- NgModel lives here
import { ChartsModule } from 'ng2-charts';
import { MostRatedRecipesComponent } from './most-rated-recipes/most-rated-recipes.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { StarRatingModule } from 'angular-star-rating';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { VideoGamesComponent } from './video-games/video-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputsComponent,
    ChartsComponent,
    MostRatedRecipesComponent,
    SideNavComponent,
    RegistrationComponent,
    AllRecipesComponent,
    CreateRecipeComponent,
    VideoGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    ChartsModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
