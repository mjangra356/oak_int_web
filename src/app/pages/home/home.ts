import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoticeService, Notice } from '../../services/notice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  notices: Notice[] = [];

  constructor(private noticeService: NoticeService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.noticeService.getNotices().subscribe({
      next: (data) => {
        this.notices = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching notices', err);
      }
    });
  }
}
