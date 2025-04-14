import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnInit {
  summary: string = '';

  constructor(private portfolioService: PortfolioService) {}

  async ngOnInit() {
    try {
      document
        .querySelector('.summary')
        ?.setAttribute('style', 'min-height: 100px');
      this.summary = await this.portfolioService.getSummary();
    } finally {
      setTimeout(() => {
        document.querySelector('.summary')?.removeAttribute('style');
      }, 100);
    }
  }
}
