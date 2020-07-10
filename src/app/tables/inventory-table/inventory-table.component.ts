import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { SaleItem } from 'hotel-lib';
import { SaleService } from 'src/app/services/sale.service';
import { InventoryService } from 'src/app/services/inventory.service';
// import {} from "hotel-lib"

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss'],
})
export class InventoryTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  // userSubscription: Subscription;
  dataSource: MatTableDataSource<SaleItem>;
  Billers: SaleItem[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  userSubscription: any;

  constructor(
    private InventoryService: InventoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchBiller();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.Billers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches Billers from remote
   */
  fetchBiller = (): void => {
    this.loading = true;
    this.userSubscription = this.InventoryService.getInventoryItems().subscribe(
      (data: SaleItem[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addBillerToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds Billers to datasource
   */
  addBillerToDataSource = (Billers: SaleItem[]): void => {
    Billers.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };

  openTransferModal = (): void => {
    // this.dialog.open(BillerRequestModalComponent, {
    //   width: '500px',
    // });
  };
}
