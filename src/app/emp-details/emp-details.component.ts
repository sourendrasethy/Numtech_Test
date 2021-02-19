import {Component, Inject, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit, AfterViewInit {
  id: number;
  data;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.apiService.getById(id).subscribe(data => {
      this.data = data['data'];
    });
  }
// tslint:disable-next-line:typedef
ngAfterViewInit() {
}

  // tslint:disable-next-line:typedef
  closeModal() {
    this.router.navigate(['/empdashBoard']);
  }
}
