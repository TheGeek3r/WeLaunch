import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'app/modules/add-dish/add-dish.types';
import { ToastrService } from 'ngx-toastr';
import { optionsToString } from 'rrule/dist/esm/src/optionstostring';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  
  itemsList: Ingredient[];
  itemToAdd: FormGroup;

  nameOptions = [];
  filteredNameOptions: Observable<any[]>;

  unitOptions = [];
  filteredUnitOptions: Observable<any[]>;

  constructor(public shoppingListComponent: ShoppingListComponent,
              private _formBuilder: FormBuilder,
              private _changeDetectorRef: ChangeDetectorRef,
              private _toastr: ToastrService,
              private _httpClient: HttpClient
              ) { }

  ngOnInit(): void {

    this._httpClient.get("assets/json/units.txt").subscribe(data =>{
      console.log(data);
      this.unitOptions = data as any[];
      })
    
    this._httpClient.get("assets/json/ingredients.txt").subscribe(data =>{
      console.log(data);
      this.nameOptions = data as any[];
    })

    this.itemsList = [];
    this.itemToAdd = this._formBuilder.group({
      name: ['', [Validators.required]],
      amount: [''],
      unit: ['']
    });

    this.filteredNameOptions = this.itemToAdd.get('name').valueChanges.pipe(
      startWith(''),
      map(value => this._filterName(value, this.nameOptions))
    );

    this.filteredUnitOptions = this.itemToAdd.get('unit').valueChanges.pipe(
      startWith(''),
      map(value => this._filterUnits(value, this.unitOptions))
    );
  }

  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }

  addItem(): void
  {
      // Service pour ajouter l'ingredient : doit retourner l'id
      if(this.itemToAdd.valid)
      {
        this.itemsList.push(
          {
            id : 1,
            name : this.itemToAdd.get('name').value,
            amount : this.itemToAdd.get('amount').value,
            unit: this.itemToAdd.get('unit').value
          });

        this.itemToAdd.controls['name'].setValue("");
        this.itemToAdd.controls['amount'].setValue("");
        this.itemToAdd.controls['unit'].setValue("");
        
        this._toastr.success("Ajout de l'ingrédient avec succès !");
      }
      else
      {
        this._toastr.warning("Le nom de l'ingrédient est obligatoire !");
      }
  }

  private _filterName(value: string, optionsArray: any[]): string[] {
    if(value && value.length < 2)
      return []; 
    else
    {
      const filterValue = value.toLowerCase();
      return optionsArray.filter(option => option.name.toLowerCase().includes(filterValue));
    }
  }

  private _filterUnits(value: string, optionsArray: any[]): string[] {
    
    if(value && value.length < 2)
      return [];
    else
    {
      const filterValue = value.toLowerCase();
      return optionsArray.filter(option => option.name.toLowerCase().includes(filterValue) || option.fullname?.toLowerCase().includes(filterValue));
    }
  }

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
}
