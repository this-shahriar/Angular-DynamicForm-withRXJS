import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _statesService: StatesService
  ) {}

  get addressList() {
    return this.signUpForm.get('addressList') as FormArray;
  }

  get phoneList() {
    return this.signUpForm.get('phoneList') as FormArray;
  }

  addAddress = () => this.addressList.push(this._formBuilder.control(''));
  addPhone = () =>
    this.phoneList.push(
      this._formBuilder.group({
        type: '',
        phoneNumber: '',
      })
    );

  signUpForm = this._formBuilder.group({
    username: [''],
    email: [''],
    addressList: this._formBuilder.array([this._formBuilder.control('')]),
    phoneList: this._formBuilder.array([
      this._formBuilder.group({
        type: '',
        phoneNumber: '',
      }),
    ]),
  });

  submitSignUp = () => {
    this.signUpForm?.value &&
      this._statesService.setState(this.signUpForm.value);
  };
}
