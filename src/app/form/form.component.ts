import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  inputForm!: FormGroup;
  stringsInput!: StringsInput;

  @Output() stringsInputSubmited: EventEmitter<StringsInput> = new EventEmitter<StringsInput>();

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      string1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      string2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    })
  }

  ngOnInit() { }

  onSubmit() {
    console.log('submit');
    this.stringsInput = this.inputForm.getRawValue();
    this.stringsInputSubmited.emit(this.stringsInput);
  }
}

export class StringsInput {
  constructor(public string1: string, public string2: string) 
  {
  }
}