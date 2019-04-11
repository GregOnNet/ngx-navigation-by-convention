import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './root/about/about.component';
import { ContactComponent } from './root/contact/contact.component';
import { HomeComponent } from './root/home/home.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, ContactComponent, HomeComponent],
  imports: [BrowserModule, NavigationModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
