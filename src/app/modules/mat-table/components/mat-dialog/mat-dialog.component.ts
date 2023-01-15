import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/core/data/user-data';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent {

  constructor(public dialogRef: MatDialogRef<MatDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: UserData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
