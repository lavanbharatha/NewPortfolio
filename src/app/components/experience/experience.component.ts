import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Liberty Mutual',
      role: 'Software Engineer',
      period: 'Jan 2023 - Present',
      location: 'Boston, MA',
      description: [
        'Developed and maintained insurance policy management system using Java and Spring Boot',
        'Implemented RESTful APIs for policy creation and claims processing',
        'Collaborated with cross-functional teams to improve system performance and user experience',
        'Reduced API response time by 40% through optimization and caching strategies'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST API', 'Microservices']
    },
    {
      company: 'Finish Line Inc.',
      role: 'Software Developer',
      period: 'Jun 2021 - Dec 2022',
      location: 'Indianapolis, IN',
      description: [
        'Built and maintained e-commerce platform features using Angular and Spring Boot',
        'Implemented secure payment processing integration with multiple gateways',
        'Developed inventory management system with real-time updates',
        'Improved website performance resulting in 25% increase in user engagement'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Security', 'REST API']
    },
    {
      company: 'Hanuma Infotech',
      role: 'Junior Developer',
      period: 'Jan 2021 - May 2021',
      location: 'Remote',
      description: [
        'Assisted in developing web applications using Java and Angular',
        'Created responsive UI components following design specifications',
        'Participated in code reviews and implemented feedback',
        'Contributed to documentation and testing efforts'
      ],
      technologies: ['Java', 'Angular', 'MySQL', 'HTML/CSS', 'Bootstrap']
    }
  ];
} 