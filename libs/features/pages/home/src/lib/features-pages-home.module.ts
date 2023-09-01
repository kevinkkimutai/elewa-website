import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { EducationSectionComponent } from './components/education-section/education-section.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomePageComponent, EducationSectionComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
