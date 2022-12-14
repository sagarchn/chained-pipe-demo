import { Component, QueryList, ViewChildren } from '@angular/core';
import { User } from './model/user.model';
import { USERS } from './data/users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Custom Chained Pipe Demo!';

  users: User[];

  // pagination data
  currentPage = 1;
  pageSize: 5 | 10 | 15;
  searchQuery: string;

  sortBy: string;
  sortDirection: string;


  constructor() {
    this.users = USERS;
    this.pageSize = 5;
    this.searchQuery = '';

    this.sortBy = 'id';
    this.sortDirection = 'ASC'
  }

  onSort({column, direction}: any) {

  }

}
