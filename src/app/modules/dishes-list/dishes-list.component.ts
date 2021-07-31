import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  searchInputControl: FormControl = new FormControl();
  contactsCount: number = 0;

  contacts = [
      {
          id          : 'cd5fa417-b667-482d-b208-798d9da3213c',
          avatar      : 'assets/images/avatars/male-01.jpg',
          background  : 'assets/images/cards/14-640x480.jpg',
          name        : 'Pommes de terre + Bibeleskaes et lardons aux oignons',
          category    : 'Plats',
          preparation : '1h30',
          cuisson     : '40m'
      },
      {
          id          : 'beec5287-ed50-4504-858a-5dc3f8ce6935',
          avatar      : null,
          background  : null,
          name        : 'Lasagnes',
          category    : 'Plats',
          preparation : '30m',
          cuisson     : '1h40m'
      },
      {
          id          : '9d3f0e7f-dcbd-4e56-a5e8-87b8154e9edf',
          avatar      : 'assets/images/avatars/male-02.jpg',
          background  : 'assets/images/cards/15-640x480.jpg',
          name        : 'Bernard Langley',
          category    : 'Entrée',
          preparation : '30m',
          cuisson     : '40m'
      },
      {
          id          : '42a5da95-5e6d-42fd-a09d-de755d123a47',
          avatar      : 'assets/images/avatars/male-03.jpg',
          background  : 'assets/images/cards/16-640x480.jpg',
          name        : 'Mclaughlin Steele',
          category    : 'Desserts',
          preparation : '1h30',
          cuisson     : '1h40'
      }
    ];

  constructor() { }

  ngOnInit(): void {
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

       /**
     * Filter by search query
     *
     * @param query
     */
        filterByQuery(query: string): void
        {
        }
    
        /**
         * Filter by category
         *
         * @param change
         */
        filterByCategory(change: MatSelectChange): void
        {
        }
}
