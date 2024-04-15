import { Component, OnInit } from '@angular/core';
import { PlaydateService } from '../../core/services/playdate.service';
import { Playdate } from '../../shared/models/playdate';
import { PlaydateComponent } from '../../shared/components/playdates/playdate/playdate.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-playdates',
  standalone: true,
  imports: [PlaydateComponent, RouterLink],
  templateUrl: './playdates.component.html',
  styleUrl: './playdates.component.scss',
})
export class PlaydatesComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  playdates: Playdate[] = [];

  constructor(
    private playdateService: PlaydateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = params['page'] ? Number(params['page']) : 1;
      this.showPlaydates(page);
    });
  }

  showPlaydates(page: number) {
    this.playdateService.getPlaydates(page).subscribe({
      next: (response: any) => {
        this.playdates = response.playdates;
        this.currentPage = response.current_page;
        this.totalPages = response.total_pages;
        console.log(this.playdates, this.currentPage, this.totalPages);
      },
      error: (error: any) => {
        console.log('error when fetching playdates', error);
      },
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.currentPage + 1 },
        queryParamsHandling: 'merge',
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.currentPage - 1 },
        queryParamsHandling: 'merge',
      });
    }
  }
}
