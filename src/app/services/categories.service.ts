import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { concatMap, catchError } from 'rxjs/operators';
import { List } from 'lodash';
import { Category } from 'app/models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getTraductionOfCategorie(mot : string)
  {
    return this.http.get<any>(environment.traductionService + "&text=" + mot + "&lang=fr-en");
  }

  getImageOfCategorie(traduction: string)
  {
    return this.http.get<any>(environment.imageService + "&query=" + traduction);
  }

  ajouterCategorie(nom : string)
  {
    let img: string;
    return this.getTraductionOfCategorie(nom).pipe
    (
      concatMap(traduction => { 
        if(traduction.code == 200 || traduction.text.length < 1)
          return this.getImageOfCategorie(traduction.text[0]);
        else
          return "assets/images/categories/demo.jpeg";
        }),
        concatMap(image => { 
          img = image.urls.raw + "&auto=format&fit=crop&w=318&h=180";
          return img; 
        }),
    )
  }

  getCategories() : Observable<Category[]>{
    //return this.http.get<Category[]>(environment.apiV1 + "categories");
    return of([new Category(1, "Entrée"),new Category(2, "Plats"), new Category(3, "Desserts")]);
  }


}
