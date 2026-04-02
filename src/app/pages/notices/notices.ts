import { Component } from '@angular/core';

@Component({
  selector: 'app-notices',
  standalone: true,
  templateUrl: './notices.html'
})
export class NoticesComponent {
  allNotices = [
    { id: 1, title: 'Annual Sports Day', description: 'Join us for our annual sports day event this Friday. All students are requested to wear their house uniforms.', date: 'Oct 15, 2026', category: 'Event' },
    { id: 2, title: 'Parent-Teacher Meeting', description: 'Schedule for the upcoming PTM for all grades. Check your email for specific time slots.', date: 'Oct 20, 2026', category: 'Academic' },
    { id: 3, title: 'Winter Break Announcement', description: 'School will be closed for winter break from Dec 20 to Jan 5. Have a great holiday!', date: 'Dec 01, 2026', category: 'Holiday' },
    { id: 4, title: 'Science Fair Registration', description: 'Registration for the state-level science fair is now open. Submit your proposals by end of month.', date: 'Oct 10, 2026', category: 'Academic' },
    { id: 5, title: 'Bus Route Changes', description: 'Minor changes to bus routes 4 and 7 starting next Monday due to road construction.', date: 'Oct 05, 2026', category: 'Admin' }
  ];
}
