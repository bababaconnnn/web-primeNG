import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-table',
  templateUrl: './all-table.component.html',
  styleUrls: ['./all-table.component.scss']
})
export class AllTableComponent {
  selectedData!: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.selectedData = params['data'];
    });
  }

}
