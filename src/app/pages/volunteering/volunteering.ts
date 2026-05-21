import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-volunteering',
  imports: [Navbar, CommonModule, ReactiveFormsModule, Footer],
  templateUrl: './volunteering.html',
  styleUrl: './volunteering.css',
})
export class Volunteering {
  volunteerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.volunteerForm = this.fb.group({
      // name: ['', Validators.required],
      // phone: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // city: ['', Validators.required],
      // service: ['', Validators.required],
      // message: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      thoughts: [''],
      consent: [false, Validators.requiredTrue],
    });
  }

  submitForm(): void {
    if (this.volunteerForm.valid) {
      console.log(this.volunteerForm.value);

      alert('Volunteer Registration Submitted Successfully');

      this.volunteerForm.reset();
    } else {
      this.volunteerForm.markAllAsTouched();
    }
  }
}
