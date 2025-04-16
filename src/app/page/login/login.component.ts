import { Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DomainType } from '../../model/domain.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService ],
})
export class LoginComponent implements OnInit {
    loginService = inject(LoginService);
    domaineItems  = signal<DomainType[]>([]);
    todoItems  = signal<Array<any>>([]);
    ngOnInit(): void {  
      this.loginService.getTodos().pipe(
       catchError((error) => {
          console.error('Error fetching data:', error);
          // Handle the error as needed, e.g., return an empty array or throw an error
          return [];
        })
      ).subscribe((data) => {
        this.todoItems.set(data);
      });

      console.log(  this.loginService.domainItem)
      this.domaineItems.set(this.loginService.domainItem);
    }
}
