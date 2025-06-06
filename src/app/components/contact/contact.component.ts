import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
    gsap.registerPlugin(ScrollTrigger);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
  ngAfterViewInit(): void {
    var tl = gsap.timeline();
    tl.from('.contact-form', {
      opacity: 0,
      x: 1000,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top center',
        end: 'bottom center',

      }
    }, "contact");
    const items = document.querySelectorAll('.contact-item');
    items.forEach((item, index) => {
      tl.from(item, {
        opacity: 0,
        x: -1000,
        duration: 0.4,
        delay: index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 60%',
        }
      }, "contact");
    });
  }
}
