import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';
import { PlaneModule } from './plane/plane.module';
import { TrainModule } from './train/train.module';
import { AutomobileModule } from './automobile/automobile.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    PlaneModule,
    TrainModule,
    AutomobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
