import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

    course!: Course;
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        // use a not null assertion operator (!) if you are sure it is not null;
        this.course = this.courseService.retrieveByid(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }

    save(): void {
        this.courseService.save(this.course);
    }

}