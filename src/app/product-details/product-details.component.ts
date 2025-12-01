import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'anf-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailComponent {
  @Input() productDetails!: IProduct;
  @Output() buy = new EventEmitter()


buyButtonClicked(product: IProduct): void {
   this.buy.emit();
 }

}
