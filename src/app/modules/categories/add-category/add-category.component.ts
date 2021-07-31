import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  
  constructor(
    public matDialogRef: MatDialogRef<AddCategoryComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoryForm = this._formBuilder.group({
      name     : ['', Validators.required],
    });
  }

  /**
   * Save and close
   */
  close(): void
  {
    // Close the dialog
    this.matDialogRef.close();
  }

  confirmCategory()
  {
    this.matDialogRef.close(this.categoryForm.controls["name"].value);
  }
}
