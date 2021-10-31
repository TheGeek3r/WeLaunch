import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/models/categories';
import { CategoriesService } from 'app/services/categories.service';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  searchInputControl: FormControl = new FormControl();
  categories: Category[];
  filters: {
    categoryName$: BehaviorSubject<string>;
    query$: BehaviorSubject<string>;
  } = {
    categoryName$ : new BehaviorSubject('all'),
    query$        : new BehaviorSubject(''),
  };
  defaultValue : any;

  filteredDishes = [];
  dishes = [
      {
          id          : 'cd5fa417-b667-482d-b208-798d9da3213c',
          avatar      : 'assets/images/avatars/male-01.jpg',
          background  : 'assets/images/cards/14-640x480.jpg',
          name        : 'Pommes de terre + Bibeleskaes et lardons aux oignons',
          category    : 'Plats',
          categoryId  : '2',
          preparation : '1h30',
          cuisson     : '40m'
      },
      {
          id          : 'beec5287-ed50-4504-858a-5dc3f8ce6935',
          avatar      : null,
          background  : null,
          name        : 'Lasagnes',
          category    : 'Plats',
          categoryId  : '2',
          preparation : '30m',
          cuisson     : '1h40m'
      },
      {
          id          : '9d3f0e7f-dcbd-4e56-a5e8-87b8154e9edf',
          avatar      : 'assets/images/avatars/male-02.jpg',
          background  : 'assets/images/cards/15-640x480.jpg',
          name        : 'Bernard Langley',
          category    : 'Entrée',
          categoryId  : '1',
          preparation : '30m',
          cuisson     : '40m'
      },
      {
          id          : '42a5da95-5e6d-42fd-a09d-de755d123a47',
          avatar      : 'assets/images/avatars/male-03.jpg',
          background  : 'assets/images/cards/16-640x480.jpg',
          name        : 'Mclaughlin Steele',
          category    : 'Desserts',
          categoryId  : '3',
          preparation : '1h30',
          cuisson     : '1h40'
      }
    ];

  constructor(private _categoriesService : CategoriesService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
      this.defaultValue = "all";
      this._categoriesService.getCategories().subscribe(value => this.categories = value);
      combineLatest([this.filters.categoryName$, this.filters.query$])
            .subscribe(([categoryName, query]) => {

                // Reset the filtered courses
                this.filteredDishes = this.dishes;

                // Filter by category
                if ( categoryName !== 'all' )
                {
                    this.filteredDishes = this.filteredDishes.filter(dish => dish.categoryId == categoryName);
                }

                // Filter by search query
                if ( query !== '' )
                {
                    this.filteredDishes = this.filteredDishes.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
                }
            });
            // TODO : TO CHECK FAUX 
            this._route.params.subscribe(params => {
                //this.filteredDishes = this.filteredDishes.filter(dish => dish.categoryId == params['id']); // (+) converts string 'id' to a number
                console.log(params['id'])
                if(params['id'])
                {
                    this.filters.categoryName$.next(params['id']);
                    this.defaultValue = Number(params['id']);
                }
            });

  }

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

   createContact(){}


   filterByQuery(query: string): void
   {
       this.filters.query$.next(query);
   }

   filterByCategory(change: MatSelectChange): void
   {
       this.filters.categoryName$.next(change.value);
   }
}
