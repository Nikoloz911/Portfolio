import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  summary: string = '';

  constructor(private portfolioService: PortfolioService) {}
  async ngOnInit() {
    this.summary = await this.portfolioService.getSummary();
  }
}
