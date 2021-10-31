import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations   : fuseAnimations
})
export class CategoriesComponent implements OnInit {

  image = "assets/images/mansion-01-320x200.jpg";
  categories = [
    {
      id: 1,
      name: 'Repas',
      numberOfDishes: 33,
      algoRepas: true,
      image: 'assets/images/mansion-01-320x200.jpg'
    },
    {
      id: 2,
      name: 'Repas',
      numberOfDishes: 33,
      algoRepas: true,
      image: 'assets/images/mansion-01-320x200.jpg'
    },
    {
      id: 3,
      name: 'Repas',
      numberOfDishes: 33,
      algoRepas: true,
      image: 'assets/images/mansion-01-320x200.jpg'
    },
    {
      id: 4,
      name: 'Repas',
      numberOfDishes: 33,
      algoRepas: true,
      image: 'assets/images/mansion-01-320x200.jpg'
    }
  ];

  ngOnInit() {
  }

  constructor(
    private _categoriesService : CategoriesService,
    private _dialog: MatDialog){}

  addNewCategory()
  {
    const dialogRef = this._dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe( result => {

      if(result != null)
      {
        let img: string;

        this._categoriesService.getImageOfCategorie('food').subscribe(image => 
          {
            console.log(image);
            img = image.urls.raw + "&auto=format&fit=crop&w=318&h=180";
            this.categories.push({id: 1, name: result, numberOfDishes: 0, algoRepas: false, image: img});
          },
          err => {
            img = "assets/images/categories/demo.jpeg";
            this.categories.push({id: 5, name: result, numberOfDishes: 0, algoRepas: false, image: img});
          }
        );

        /*this._categoriesService.getTraductionOfCategorie(result).subscribe(traduction => 
          {
            // gérer les erreurs
            if(traduction.code == 200 || traduction.text.length < 1)
            {
              console.log(traduction.text[0]);
              this._categoriesService.getImageOfCategorie(traduction.text[0]).subscribe(image => 
                {
                  console.log(image);
                  img = image.urls.raw + "&auto=format&fit=crop&w=318&h=180";
                  this.categories.push({name: result, numberOfDishes: 0, algoRepas: false, image: img});
                },
                err => {
                  img = "assets/images/categories/demo.jpeg";
                  this.categories.push({name: result, numberOfDishes: 0, algoRepas: false, image: img});
                }
              );
            }
            else{
              img = "assets/images/categories/demo.jpeg";
              this.categories.push({name: result, numberOfDishes: 0, algoRepas: false, image: img});
            }
          }
        ); */
        //this.categories.push({name: result, numberOfDishes: 0, algoRepas: false, image: this.image});
      }    
    });
  }

  updateGeneration(categorie: any)
  {
    categorie.algoRepas = !categorie.algoRepas;
  }
}