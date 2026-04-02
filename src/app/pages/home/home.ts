import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  notices = [
    { title: 'Annual Sports Day', description: 'Join us for our annual sports day event this Friday.', date: 'Oct 15, 2026' },
    { title: 'Parent-Teacher Meeting', description: 'Schedule for the upcoming PTM for all grades.', date: 'Oct 20, 2026' },
    { title: 'Winter Break Announcement', description: 'School will be closed for winter break from Dec 20.', date: 'Dec 01, 2026' }
  ];
}
