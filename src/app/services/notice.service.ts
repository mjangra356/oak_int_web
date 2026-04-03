import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Notice {
  id?: number | string;
  title: string;
  description: string;
  date: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private apiUrl = `${environment.apiUrl}/notices`;

  constructor(private http: HttpClient) { }

  getNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.apiUrl);
  }
}
