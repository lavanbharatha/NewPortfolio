import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  experiences: Experience[] = [];

  processedExperiences: {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[][];
    technologies: string[];
  }[] = [];

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.experiences = [
      {
        company: 'Hanuma Infotech',
        role: 'Junior Developer',
        period: 'Mar 2023 - Present',
        location: 'Remote',
        description: [
          'Assisted in developing web applications using Java and Angular frameworks',
          'Created responsive UI components.',
          'Participated in regular code reviews and implemented feedback to improve code quality',
          'Integrated RESTful APIs for CRUD operations with SpringBoot backend',
          'Worked with MySQL database for designing and optimizing queries',
          'Collaborated with senior developers to fix UI/UX bugs during sprints',
          'Used Git for version control.',
          'Collaborated on modular Angular18 components with routing and state management for a scalable frontend architecture.',
          'Styled reusable components and layouts with SCSS and Bootstrap utility classes to ensure design consistency.',
        ],
        technologies: ['Java', 'SpringBoot', 'Angular', 'Bootstrap', 'MySQL', 'HTML/CSS'],
      }
    ];

    this.processedExperiences = this.experiences.map(exp => ({
      ...exp,
      description: exp.description.map(sentence => sentence.split(' ')),
    }));
  }

  ngAfterViewInit(): void {
    gsap.from('.experience-word', {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 20,
      duration: 0.4,
      stagger: 0.025,
      ease: 'power2.out'
    });
  }
}
