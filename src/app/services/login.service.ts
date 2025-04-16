import { inject, Injectable } from '@angular/core';
import { DomainType } from '../model/domain.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);
  domainItem: Array<DomainType> = [{
    id: 1,
    name: 'Domain 1',
    description: 'Description of Domain 1',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    name: 'Domain 2',
    description: 'Description of Domain 2',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Domain 3',
    description: 'Description of Domain 3',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'Domain 4',
    description: 'Description of Domain 4',
    createdAt: new Date(),
    updatedAt: new Date()
  }];
  getTodos(){
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts');
  }
}
