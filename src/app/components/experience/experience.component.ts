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
  technologies?: string[];
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
    technologies?: string[];
  }[] = [];

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.experiences = [
      {
        company: 'Hanuma Infotech',
        role: 'Java Developer',
        period: 'April 2024 – Present',
        location: 'Remote',
        description: [
          'Developed Spring Boot services to manage warehouse inventory, tracking inbound and outbound stock movements and real-time availability across multiple warehouse locations.',
          'Implemented business logic for stock allocation, reservations, and validations ensuring accurate inventory levels and preventing overselling across retail operations systems.',
          'Developed microservices using Spring Boot, implementing layered architecture with JPA, Hibernate, and service-level abstractions for clean, testable code.',
          'Secured RESTful APIs with Spring Security and JWT, applying role-based access control and token-based authentication for protected routes.',
          'Designed and implemented global exception handling with @ControllerAdvice, standardized API responses, and logged system events using Logback.',
          'Integrated MySQL database with optimized queries, indexes, and schema migrations; built reusable repository layers using Spring Data JPA.',
          'Automated CI/CD pipelines using Jenkins and Maven, streamlining builds and environment-specific deployments.',
          'Wrote unit tests using JUnit and Mockito for service-layer logic, validating business rules and mocking repository dependencies.',
          'Deployed applications on Apache Tomcat and configured application profiles, logging levels, and resource limits via externalized properties.',
        ],
        technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Jenkins', 'JUnit', 'Mockito', 'Apache Tomcat']
      },
      {
        company: 'Poulomi Estates Pvt Ltd',
        role: 'Junior Java Developer',
        period: 'July 2023 – March 2024',
        location: 'Hyderabad, India',
        description: [
          'Assisted in developing and maintaining Spring Boot APIs for property, customer, and payment management with basic validations.',
          'Fixed bugs, implemented simple business logic, and handled edge cases to support smooth real-estate operations.',
          'Wrote and executed MySQL queries for properties, bookings, and customers, maintaining data accuracy and supporting dashboards.',
          'Tested APIs using Postman, worked with JWT authentication, and coordinated effectively with frontend developers and team daily.',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'JWT']
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
        start: 'top 50%',
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
