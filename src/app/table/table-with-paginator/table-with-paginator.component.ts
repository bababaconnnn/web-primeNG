import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-table-with-paginator',
  templateUrl: './table-with-paginator.component.html',
  styleUrls: ['./table-with-paginator.component.scss']
})
export class TableWithPaginatorComponent {
  customers!: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCustomer().subscribe((customers: any) => {
      this.customers = customers;
      console.log(this.customers);

    });
  }
}
