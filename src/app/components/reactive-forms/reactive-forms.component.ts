import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null;
    }

    return { textValidator: true };
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder);
  //mesmo função da linha acima
  // constructor(private _fb: FormBuilder) {  }

  // public profileForm = this._fb.group({
  public profileForm = this.#fb.group({
    name: [
      '',
      [Validators.minLength(2), Validators.maxLength(5), textValidator()],
    ], // minimo 2 maximo 4, precisa numero e letra maiuscula
    tecnologias: this.#fb.group({
      front: ['React'],
      back: ['Node'],
    }),
    myFavoriteFood: this.#fb.array(['xtudo']),
  });

  // public profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   tecnologias: new FormGroup({
  //     front: new FormControl('React'),
  //     back: new FormControl('NodeJs'),
  //   }),
  //   myFavoriteFood: new FormArray([]),
  // });

  public updateName() {
    // this.name.setValue('Maria');
  }

  public updateDados() {
    this.profileForm.patchValue({
      name: 'João',
      tecnologias: {
        front: 'angular',
        back: 'java',
      },
    });
  }

  public addFavoriteFood(newfood: string) {
    const myFavoriteFood = this.profileForm.get('myFavoriteFood') as FormArray;
    const addFood = new FormControl(newfood);
    myFavoriteFood.push(addFood);
  }

  public submit() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
