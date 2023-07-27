// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../_services/user.service';
// import { Observable, throwError } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';


// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })

// export class UserComponent {

// }

// ============================================================================

// export class UserComponent implements OnInit {

//   message: any;
//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//     this.forUser();
//   }


//   forUser() {
//     this.userService.forUser()
//       .pipe(
//         tap((response) => {
//           console.log(response);
//           this.message = response;
//         }),
//         catchError((error) => {
//           console.log(error);
//           return throwError(error);
//         })
//       )
//       .subscribe();
//   }


  // forUser() {
  //   this.userService.forUser().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.message = response;
  //     }, 
  //     (error)=>{
  //       console.log(error);
  //     }
  //   );
  // }
// }






import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  message!: string;
  constructor(
    private userService: UserService

  ) { }

  nqOnInit(): void {
    this.forUser();
  }

  // forUser() {
  //   this.userService.forUser().pipe(
  //     tap((response: any) => {
  //       console.log(response);
  //       this.message = response;
  //     })
  //   ).subscribe({
  //     next: () => { },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }
  // async forUser() {
  //   try {
  //     const response = await this.userService.forUser();
  //     console.log(response);
  //     this.message = response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
    forUser() {
      this.userService.forUser().subscribe(
        (response) => {
          console.log(response);
          this.message = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
  

