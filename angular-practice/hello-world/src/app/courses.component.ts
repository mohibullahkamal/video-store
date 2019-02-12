import { Component } from '@angular/core';   //we are importing 'component' decorator from angularCore

@Component({
    selector: 'courses',   // we write selectors this way.... <courses> "courses"; <div class="courses"> ".courses"; <div id="courses"> "#courses"
    // we use "Directives" here...
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})   //this is the decorator function... 

export class CoursesComponent {
    title = "List of courses using data binding and String Interpolation...";
    courses = ["course1", "course2", "course3"];

    getTitle() {
        return this.title;
    }
}