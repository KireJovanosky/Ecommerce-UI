import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['Product', 'Description', 'Price', 'Discounted price', 'Action'];

  cartDetails: any[] = [];

  constructor(private productService: ProductService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.getCartDetails();
  }

  delete(cartId: any) {
    this.productService.deleteCartItem(cartId).subscribe(
      (response) => {
        this.getCartDetails();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getCartDetails(){
    this.productService.getCartDetails().subscribe(
      (response: any) => {        
        this.cartDetails = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  checkout() {

    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: false, id: 0
    }]);    
  }

}
