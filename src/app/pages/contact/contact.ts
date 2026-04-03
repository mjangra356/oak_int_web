import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['General Inquiry', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.successMessage = 'Your message has been sent successfully! We will get back to you shortly.';
          this.contactForm.reset({ subject: 'General Inquiry' });
        },
        error: (err) => {
          this.isSubmitting = false;
          console.error('Error sending message', err);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.successMessage = '';
    this.contactForm.reset({ subject: 'General Inquiry' });
  }
}

