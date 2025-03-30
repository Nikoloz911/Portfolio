import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'https://gitconnected.com/v1/portfolio/nikoloz911';
  constructor(private http: HttpClient) { }

  async getSummary(): Promise<string> {
    try {
      let response = await fetch(this.apiUrl);
      let data = await response.json();
      return data.basics.summary;
    } catch (error) {
      console.error('Error fetching summary:', error);
      return 'Failed to load summary';
    }
  }
}

