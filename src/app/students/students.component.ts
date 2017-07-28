import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  form;
  student:Student;
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      sid: new FormControl(0),
      name: new FormControl(""),
      mobile: new FormControl(""),
      address: new FormControl(""),
      image: new FormControl(""),
    })
  }

  onSubmit = function (student) {
    this.studentService.saveStudent(student);
  }
  onImageChange = function (event) {
    this.form.value.image = event.srcElement.files[0];
    //console.log(event.srcElement.files[0]);
    console.log(this.image);
  }

}
