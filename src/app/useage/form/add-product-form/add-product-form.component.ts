import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/product.service';

interface Item {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  product!: FormGroup;
  item: Item[] | undefined;
  cate: Item[] | undefined;

  constructor(private messageService: MessageService, private productService: ProductService) {}

  ngOnInit() {
    this.item = [
      { name: 'Item 1', code: '01' },
      { name: 'Item 2', code: '02' },
      { name: 'Item 3', code: '03' },
      { name: 'Item 4', code: '04' }
    ];

    this.cate = [
      { name: 'Electronics', code: '01' },
      { name: 'Makeup', code: '02' },
      { name: 'Food', code: '03' },
      { name: 'Coffee', code: '04' }
    ];

    this.product = new FormGroup({
      'price': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'desc': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'item': new FormControl(this.item[0], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.product);
    if(this.product.valid) {
      const formData = {
        name: this.product.get('name')?.value,
        desc: this.product.get('desc')?.value,
        price: this.product.get('price')?.value,
        category: this.product.get('category')?.value.name,
        item: this.product.get('item')?.value.code
      };
      console.log(formData);
      this.productService.sharedValue.next(formData)
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid' });
    }
    
    



  }

}
