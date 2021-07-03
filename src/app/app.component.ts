import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // progress = 0;
  // timer;
  courses;
  isLoading = false;

  constructor(private dialog: MatDialog) {
    // this.timer = setInterval(() => {
    //     this.progress++;
    //     if (this.progress == 100) {
    //       clearInterval(this.timer);
    //     }
    // }, 20);
    
    this.isLoading = true;
    this.getCourses().subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return timer(2000);
  }

  isChecked = true;

  colors = [
    {id:1, name: "blue"},
    {id:2, name: "yellow"},
  ];

  categories = [
    {name: "Begginer"},
    {name: "Intermediate"},
    {name: "Advanced"}
  ];

  selectCategory(category) {
    this.categories
        .filter(c => c != category)
        .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  onChange($event) {
    console.log($event);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: {courseId: 1}
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
