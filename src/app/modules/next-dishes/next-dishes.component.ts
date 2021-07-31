import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-next-dishes',
  templateUrl: './next-dishes.component.html',
  styleUrls: ['./next-dishes.component.scss']
})
export class NextDishesComponent implements OnInit {

  nextDishes = [
   {
      date: "2020-05-20",
      dishes : [
        {
          moment: "Midi",
          name: "Barbeuc",
          numberOfPeople: 4
        }
      ]
    },
    {
      date: "2020-05-20",
      dishes : [
        {
          moment: "Midi",
          name: "Barbeuc",
          numberOfPeople: 4
        },
        {
          moment: "Soir",
          name: "Barbeuc",
          numberOfPeople: 4
        }
      ]
    },
    {
      date: "2020-05-20",
      dishes : [
        {
          moment: "Soir",
          name: "Barbeuc",
          numberOfPeople: 5
        }
      ]
    }
  ];

  constructor(){}
  
  ngOnInit(): void {
  }

}
