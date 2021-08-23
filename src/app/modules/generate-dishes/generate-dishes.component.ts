import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { AlgoRepas } from 'app/models/dishes-algorithm';
import { GenererRepasCalendrier } from 'app/models/generate-dishes';
import { Utils } from 'app/models/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

export interface GroupBy {
  date: Date;
}

@Component({
  selector: 'app-generate-dishes',
  templateUrl: './generate-dishes.component.html',
  styleUrls: ['./generate-dishes.component.scss']
})
export class GenerateDishesComponent implements OnInit {

// Pour le step 2 : Choix des jours pour les repas
choixDates = new MatTableDataSource<GenererRepasCalendrier>();
displayedColumns: string[] = ['date', 'midi', 'soir'];

// Pour le step 3 : Choix des repas
columnsChoixRepas: string[] = [ 'moment', 'repas'];
dataSource = new MatTableDataSource<AlgoRepas>();
addOnBlur: boolean = true;
separatorKeysCodes = [ENTER, COMMA];

// Pour le remplissage automatique des repas
repasCtrl = new FormControl();
filteredRepas: Observable<string[]>;
allRepas: string[] = ['Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates','Jambon en croutte', 'Bouchée à la reine', 'Gratin de pates']

// Pour le remplissage du nombre de personnes
peopleColumns: string[] = ['moment', 'repas', 'nbPersonnes'];

@ViewChild('repasInput', {static: false}) repasInput: ElementRef<HTMLInputElement>;
@ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

verticalStepperStep1: FormGroup;
verticalStepperStep5: FormGroup;

constructor(
  private _formBuilder: FormBuilder,
  private _router: Router)
{
  this.filteredRepas = this.repasCtrl.valueChanges.pipe(
    map((repas: string | null) => repas ? this._filter(repas) : this.allRepas.slice()));
    
}

ngOnInit() {

  this.verticalStepperStep1 = this._formBuilder.group({
    nbJours: [7, [Validators.required, Validators.min(1), Validators.max(21)]],
  });

  this.verticalStepperStep5 = this._formBuilder.group({
    generateShoppingList: ['oui', Validators.required]
  });
}

/**
 * Finish the vertical stepper
*/
finishVerticalStepper(): void
{
     alert('You have finished the vertical stepper!');
}

// STEP 1 : permet de generer le calendrier avec les weekend + jours fériés
genererCalendrier(stepper: MatStepper)
{
  let choixDates: GenererRepasCalendrier[] = [];

  let dateSuivante = new Date(2020, 6, 18);

  for(let i = 0; i < this.verticalStepperStep1.get('nbJours').value; i++)
  {
    dateSuivante.setDate(dateSuivante.getDate() + 1);
    let date = new Date(dateSuivante.valueOf());  

    // on regarde si c'est le weekend ou un jour férié
    if(date.getDay() == 0 || date.getDay() == 6 || Utils.joursFeries(dateSuivante.getFullYear()).some(d => d.getTime() === new Date(date).getTime()))
    {
      choixDates[i] = new GenererRepasCalendrier(i, new Date(date), true, true, true, true);
    }
    else
    {
      choixDates[i] = new GenererRepasCalendrier(i, new Date(date), false, true, false, false);
    }
  }
  this.choixDates.data = choixDates;

  stepper.next();
}

// STEP 2 : lors du clique sur une checkbox midi ou soir, il faut modifier l'objet associé
modifRepas(element : GenererRepasCalendrier, checked : boolean, typeRepas: string)
{
  // evenement click sur un bouton midi ou soir du tableau
  let aModif = this.choixDates.data.find(row => row.id == element.id);

  if(typeRepas == "midi")
  {
    aModif.midi = checked;
  }
  else
    aModif.soir = checked;
}


// STEP 2 : step generer le repas
genererRepas(stepper: MatStepper)
{
  // TODO : SERVICE POUR RECUPERER LE NB DE PERSONNES PAR FAMILLE;
  let nbPersonnes = 3;
  let idNbRepas = 1;

  let listeRepas = [];

  for(let i = 0; i < this.choixDates.data.length; i++)
  {
    const infosRepas = this.choixDates.data[i];

    listeRepas.push({date: infosRepas.date, isGroupBy: true});
    if(infosRepas.midi)
    {
      listeRepas.push(new AlgoRepas(idNbRepas, infosRepas.date, "Midi", [ 'Couscous'], nbPersonnes, false));
      idNbRepas++;
    }

    if(infosRepas.soir)
    {
      listeRepas.push(new AlgoRepas(idNbRepas, infosRepas.date, "Soir", [ 'Carbo'], nbPersonnes, false));
      idNbRepas++;
    }
  }

  this.dataSource.data = listeRepas;
  stepper.next();
}

// STEP 3 : Supprimer un repas
remove(repas: string, tableau: string[]): void {
  const index = tableau.indexOf(repas);

  if (index >= 0) {
    tableau.splice(index, 1);
  }
}

// STEP 3 : Deplacer un repas
drop(event: CdkDragDrop<any>, e: AlgoRepas) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } 
  else 
  {
    if(e.repas.length == 1)
    {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      transferArrayItem(event.container.data,
        event.previousContainer.data,
        event.previousIndex,
        event.currentIndex);
    }
    else
    {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

// STEP 3 : Ajouter un repas
add(event: MatChipInputEvent, e: string[]): void {
  const input = event;
  const value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    e.push(value.trim());
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

isGroup(index, item): boolean{
  return item.isGroupBy;
}

selected(event: MatAutocompleteSelectedEvent, e: string[]): void {
  e.push(event.option.viewValue);
  this.repasInput.nativeElement.value = '';
  this.repasCtrl.setValue(null);
}


private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.allRepas.filter(repas => repas.toLowerCase().indexOf(filterValue) === 0);
}


modifyNumberOfPeople(nbPeople: number, id: number){
  let modifyNumberOfPeople = this.dataSource.data.find(row => row.id == id);
  modifyNumberOfPeople.nbPersonnes = nbPeople;
}

// Generation des repas + ajout dans la BDD 
generateDishes(){

  // TODO : Add popup pour confirmer si jamais y'a des repas mais sans recette, on informe l'utilisateur
  // Dans le cas ou il veut generer les repas, sinon balek quoi 
  this._router.navigate(['']);
}

}
