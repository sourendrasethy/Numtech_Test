import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
  name: string;
  salary: number;
  age: number;
  ID: any;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  // tslint:disable-next-line:typedef
  @HostListener('document:keyup.escape') onClose() {
    this.onCancel();
  }

  // tslint:disable-next-line:typedef
  onCancel() {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post<any>('http://dummy.restapiexample.com/api/v1/create', JSON.stringify(this.registerForm.value))
      .subscribe(data => {
      this.openSnackBar(data['message'], 'Close');
      this.onCancel();
    });
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
