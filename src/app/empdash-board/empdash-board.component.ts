import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import {ApiService} from '../api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {EmpDetailsComponent} from '../emp-details/emp-details.component';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface EmployeeDetails {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Component({
  selector: 'app-empdash-board',
  templateUrl: './empdash-board.component.html',
  styleUrls: ['./empdash-board.component.css']
})
export class EmpdashBoardComponent implements OnInit {
  empData = [];
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'getdetails'];
  public dataSource = new MatTableDataSource<EmployeeDetails>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  status: string;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient,
    public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getEmployeelist();

  }

  // tslint:disable-next-line:typedef
  getEmployeelist() {
    this.apiService.getAllUsers().subscribe(data => {
      this.empData = data['data'];
      console.log('this.empData', this.empData);
      this.dataSource = new MatTableDataSource(this.empData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // tslint:disable-next-line:typedef
  deletRecord(id: number) {
    this.http.delete('http://dummy.restapiexample.com/api/v1/delete/' + id)
      .subscribe(data => {
        console.log(data['message']);
        this.openSnackBar(data['message'], 'Close');
        this.getEmployeelist();
      });
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(empId: any): void {
    this.router.navigate(['/empdashBoard', empId.id]);
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

