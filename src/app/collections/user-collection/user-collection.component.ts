import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'hotel-lib';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { UserService } from 'src/app/services/user.service';
import { AppService } from 'src/app/services/app.service';
import { error } from 'protractor';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  userSubscription: Subscription;
  dataSource: MatTableDataSource<User>;
  hasError: boolean;
  users: User[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;

  errorMessage: string;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.getBillers();
  }

  private paginator: MatPaginator;

  @ViewChild(MatPaginator, { static: false }) set contentPaginator(
    content: MatPaginator
  ) {
    this.paginator = content;
  }
  displayCollection: Observable<any>;

  pageNumber: any = 1;
  pageSize: any = 20;
  hasData: boolean;

  setUpPaginatorAndSorter() {
    // throw new Error("Method not implemented.");
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  /**
   * Searched through dataSource collection
   * @param filter
   */
  applyFilter(filter: string) {
    if (filter.length >= 0) {
      this.dataSource.filter = filter.trim().toLowerCase();
    }
  }

  getBillers = () => {
    this.userSubscription = this.userService.getUsers().subscribe(
      (users: User[]) => {
        console.log(users);

        this.users = users;
        this.loadDataSource(users);
      },
      (error) => {
        this.hasError = true;

        this.appService.processError(error);
      }
    );
  };

  loadDataSource = (data: User[]) => {
    this.loading = false;
    if (data.length > 0) {
      this.dataSource = new MatTableDataSource(data);
      this.hasData = true;
      this.hasError = false;
      this.displayCollection = this.dataSource.connect();
      this.setUpPaginatorAndSorter();
    } else {
      this.hasData = false;
      this.hasError = false;
    }
  };

  openModal = (user?: any) => {
    this.dialog.open(UserModalComponent, {
      width: '400px',
    });
  };
}
