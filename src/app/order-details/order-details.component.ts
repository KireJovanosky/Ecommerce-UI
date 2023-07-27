import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { MyOrderDetails } from '../_model/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  
  displayedColumns = ['Id', 'Product Name', 'Name', 'Address', 'Contact No.', 'Status', 'Action']

  allOrderDetails: any[] = [];

  status: string= 'All';

  constructor(private productService: ProductService){}
  
  
  ngOnInit(): void {
    this.getAllOrderDetails(this.status);
  }

  getAllOrderDetails(statusParameter: string){
    this.productService.getAllOrderDetails(statusParameter).subscribe(
      (response: MyOrderDetails[]) => {
        this.allOrderDetails = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  markAsDelivered(orderId: any){    
    this.productService.markAsDelivered(orderId).subscribe(
      (response) => {
        this.getAllOrderDetails(this.status);
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
