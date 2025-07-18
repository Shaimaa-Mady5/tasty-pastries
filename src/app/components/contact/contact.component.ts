import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../shared/interfaces/user';
import { ContactService } from '../../shared/services/contact.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  errorMsg: string = '';
  successMsg: string = '';
  userData: User = {} as User;
  idSubscription!: Subscription;

  constructor(private ContactService: ContactService) {}
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [
      Validators.pattern(/^01[0125][0-9]{8}$/),
      Validators.required,
    ]),
  });

  handleForm(): void {
    if (this.contactForm.valid) {
      this.userData = this.contactForm.value;
      console.log(this.userData);
      this.idSubscription = this.ContactService.sendContactInfo(
        this.userData
      ).subscribe({
        next: (resp) => {
          this.successMsg = resp.message;
          console.log(this.successMsg);
          this.clearForm();
        },
        error: (err) => {
          console.log(err.error);
          this.clearForm();
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  clearForm(): void {
    this.contactForm.reset();
  }
  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }
}
