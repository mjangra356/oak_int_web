import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeService, Notice } from '../../services/notice.service';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.html'
})
export class NoticesComponent implements OnInit {
  allNotices: Notice[] = [];

  constructor(private noticeService: NoticeService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.noticeService.getNotices().subscribe({
      next: (data) => {
        this.allNotices = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching notices', err);
      }
    });
  }
}

