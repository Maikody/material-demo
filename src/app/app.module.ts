import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from './mat-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    // {provide: DIALOG_DATA, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
