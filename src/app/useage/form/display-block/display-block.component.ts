import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-display-block',
  templateUrl: './display-block.component.html',
  styleUrls: ['./display-block.component.scss']
})
export class DisplayBlockComponent implements OnInit {
  product!: any[]

  constructor(private userService: UserService, private productService: ProductService) {
    this.productService.sharedValue.subscribe((data: any) => {
      this.updateProduct(data);
    })
  }

  ngOnInit(): void {
    this.userService.getProduct().subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });

  }

  updateProduct(data: any) {
    console.log(data);
    const indexToUpdate = this.product.findIndex(obj => obj.item === data.item);
    if (indexToUpdate !== -1) {
      this.product[indexToUpdate].name = data.name;
      this.product[indexToUpdate].desc = data.desc;
      this.product[indexToUpdate].price = data.price;
      this.product[indexToUpdate].category = data.category;
    }
  }

}
