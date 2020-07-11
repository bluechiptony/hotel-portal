import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomCategory } from 'hotel-lib';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { RoomService } from 'src/app/services/room.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  billerSubscription: Subscription;
  dataSource: MatTableDataSource<RoomCategory>;
  billers: RoomCategory[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private billerService: RoomService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBillers();
  }
  users: any[] = [];
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
    this.billerSubscription = this.billerService
      .getRooms()
      .subscribe((billers: RoomCategory[]) => {
        this.billers = billers;
        this.loadDataSource(billers);
      });
  };

  loadDataSource = (data: RoomCategory[]) => {
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
