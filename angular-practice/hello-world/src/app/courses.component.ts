import { Component } from '@angular/core';   //we are importing 'component' decorator from angularCore

@Component({
    selector: 'courses',   // we write selectors this way.... <courses> "courses"; <div class="courses"> ".courses"; <div id="courses"> "#courses"
    template: '<h2>Courses</h2>'
})   //this is the decorator function... 
export class CoursesComponent {

}