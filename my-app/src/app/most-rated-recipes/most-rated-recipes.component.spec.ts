import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRatedRecipesComponent } from './most-rated-recipes.component';

describe('MostRatedRecipesComponent', () => {
  let component: MostRatedRecipesComponent;
  let fixture: ComponentFixture<MostRatedRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRatedRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRatedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
