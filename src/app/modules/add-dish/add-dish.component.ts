import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Dish, Ingredient, Recipe, Season } from './add-dish.types';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {
  
  @ViewChild('seasonsPanel') private _seasonsPanel: TemplateRef<any>;
  @ViewChild('seasonsPanelOrigin') private _seasonsPanelOrigin: ElementRef;


  verticalStepperForm: FormGroup;
  dishDetail: FormGroup;

  // Saisons
  seasons: Season[];

  dish: Dish;
  dishes: Dish[];
  recipe: Recipe[];
  ingredients: Ingredient[];

  durations: string[];
  filteredDurations: Observable<string[]>;
  filteredCooking: Observable<string[]>;

  private _seasonsPanelOverlayRef: OverlayRef;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _overlay: Overlay,
    private _renderer2: Renderer2,
    private _viewContainerRef: ViewContainerRef,
    private _changeDetectorRef: ChangeDetectorRef,
    private _httpClient: HttpClient
    ) { }

  ngOnInit(): void {

  this.seasons = [
    {id: "1", name: "Printemps"},
    {id: "2", name: "Été"},
    {id: "3", name: "Automne"},
    {id: "4", name: "Hiver"}
  ]

  this.durations = ['0h05', '0h10', '0h15','0h20', '0h25', '0h35','0h40', '0h45', '0h50','0h55', '1h00', '1h10','1h20', '1h30', '1h40','1h50', '2h00', '2h15', '2h30', '2h45', '3h00',' 3h15', '3h30', '3h35', '4h00']
  
    this.dish = {
        id :"",
        name:"",
        category: "",
        preparationTime: "",
        cookingTime: "",
        seasons: [...this.seasons],
        numberOfPeople : 4,
        ingredients: [],
        recipe: []
    }

    // Create the contact form
    this.dishDetail = this._formBuilder.group({
        step1: this._formBuilder.group({
            id : [''],
            name : ['', [Validators.required, Validators.minLength(1)]],
            category : ['', [Validators.required]],
            preparationTime : ['', [Validators.required, Validators.pattern("^([0-9]|10)h[0-5][0-9]$")]],
            cookingTime : ['', [Validators.required, Validators.pattern("^([0-9]|10)h[0-5][0-9]$")]],
            seasons : [[]]
        }),
        step2: this._formBuilder.group({
            numberOfPeople : [''],
            ingredients : this._formBuilder.array([]),
        }),
        step3: this._formBuilder.group({
            recipes : this._formBuilder.array([])
        })
  });

    this.addIngredientField();
    this.addRecipeField();

    this.filteredDurations = this.dishDetail.get('step1.preparationTime').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.filteredCooking = this.dishDetail.get('step1.cookingTime').valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.durations.filter(option => option.toLowerCase().includes(filterValue));
  }

 /**
 * Open tags panel
 */
  openSeasonsPanel(): void
  {
      // Create the overlay
      this._seasonsPanelOverlayRef = this._overlay.create({
          backdropClass   : '',
          hasBackdrop     : true,
          scrollStrategy  : this._overlay.scrollStrategies.block(),
          positionStrategy: this._overlay.position()
                                .flexibleConnectedTo(this._seasonsPanelOrigin.nativeElement)
                                .withFlexibleDimensions(true)
                                .withViewportMargin(64)
                                .withLockedPosition(true)
                                .withPositions([
                                    {
                                        originX : 'start',
                                        originY : 'bottom',
                                        overlayX: 'start',
                                        overlayY: 'top'
                                    }
                                ])
      });

      // Subscribe to the attachments observable
      this._seasonsPanelOverlayRef.attachments().subscribe(() => {

          // Add a class to the origin
          this._renderer2.addClass(this._seasonsPanelOrigin.nativeElement, 'panel-opened');
      });

      // Create a portal from the template
      const templatePortal = new TemplatePortal(this._seasonsPanel, this._viewContainerRef);

      // Attach the portal to the overlay
      this._seasonsPanelOverlayRef.attach(templatePortal);

      // Subscribe to the backdrop click
      this._seasonsPanelOverlayRef.backdropClick().subscribe(() => {

          // Remove the class from the origin
          this._renderer2.removeClass(this._seasonsPanelOrigin.nativeElement, 'panel-opened');

          // If overlay exists and attached...
          if ( this._seasonsPanelOverlayRef && this._seasonsPanelOverlayRef.hasAttached() )
          {
              // Detach it
              this._seasonsPanelOverlayRef.detach();
          }

          // If template portal exists and attached...
          if ( templatePortal && templatePortal.isAttached )
          {
              // Detach it
              templatePortal.detach();
          }
      });
  }

     /**
      * Add tag to the contact
      *
      * @param tag
      */
     addSeasonToDish(season: Season): void
     {
         // Add the tag
         this.dish.seasons.unshift(season);
 
         // Update the contact form
         this.dishDetail.get('step1').get('seasons').patchValue(this.dish.seasons);
 
         // Mark for check
         this._changeDetectorRef.markForCheck();
     }
 
     /**
      * Remove tag from the contact
      *
      * @param tag
      */
     removeSeasonFromDish(season: Season): void
     {
         // Remove the tag
         this.dish.seasons.splice(this.dish.seasons.findIndex(item => item.id === season.id), 1);
 
         // Update the contact form
         this.dishDetail.get('step1').get('seasons').patchValue(this.dish.seasons);
 
         // Mark for check
         this._changeDetectorRef.markForCheck();
     }
 
     /**
      * Toggle contact tag
      *
      * @param tag
      */
     toggleContactTag(season: Season): void
     {
         if ( this.dish.seasons.includes(season) )
             this.removeSeasonFromDish(season);
         else
             this.addSeasonToDish(season);
     }
 
     /**
      * Add the email field
      */
     addIngredientField(): void
     {
         // Create an empty email form group
         const ingreditentFormGroup = this._formBuilder.group({
             name: [''],
             amount: [''],
             unit: ['']
         });
 
         // Add the email form group to the emails form array
         (this.dishDetail.get('step2').get('ingredients') as FormArray).push(ingreditentFormGroup);
 
         // Mark for check
         this._changeDetectorRef.markForCheck();
     }
 
     /**
      * Remove the email field
      *
      * @param index
      */
     removeIngredientField(index: number): void
     {
         // Get form array for emails
         const ingredientFormArray = this.dishDetail.get('step2').get('ingredients') as FormArray;
 
         // Remove the email field
         ingredientFormArray.removeAt(index);
 
         // Mark for check
         this._changeDetectorRef.markForCheck();
     }

     /**
      * Add the email field
      */
      addRecipeField(): void
      {
          // Create an empty email form group
          const recipeFormGroup = this._formBuilder.group({
              description: ['',]
          });
  
          // Add the email form group to the emails form array
          (this.dishDetail.get('step3').get('recipes') as FormArray).push(recipeFormGroup);
  
          // Mark for check
          this._changeDetectorRef.markForCheck();
      }
  
      /**
       * Remove the email field
       *
       * @param index
       */
      removeRecipeField(index: number): void
      {
          // Get form array for emails
          const emailsFormArray = this.dishDetail.get('step3').get('recipes') as FormArray;
  
          // Remove the email field
          emailsFormArray.removeAt(index);
  
          // Mark for check
          this._changeDetectorRef.markForCheck();
      }



    addDish(){}
     /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
