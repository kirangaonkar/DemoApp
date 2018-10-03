import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  demoForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /* this.demoForm = this.fb.group({
    }); */
    this.demoForm = new FormGroup({
      'topic': new FormControl(),
      'time': new FormControl()
    });
  }

  onSubmit() {

  }
}
