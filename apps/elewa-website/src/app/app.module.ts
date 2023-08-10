import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app.routing';
import { ElementsLayoutHeaderModule } from '@elewa-website/elements/layout/header';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,ElementsLayoutHeaderModule],
  providers: [HttpClientModule, TranslocoRootModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
