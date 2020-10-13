import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

import { ProjectService } from './project.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NavigationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
