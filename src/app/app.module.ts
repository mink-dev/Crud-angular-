import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {} from './usuarios.service';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';

import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AboutComponent,
    UsersComponent,
    NavComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
