import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-go-shopping',
  templateUrl: './go-shopping.component.html'
})
export class GoShoppingComponent implements OnInit {

  tasks = [
    {
        id        : '0fcece82-1691-4b98-a9b9-b63218f9deef',
        type      : 'task',
        title     : '3 petits oeufs bio de la ferme de Thiery Schmitt',
        completed : false
    },
    {
        id        : '2e6971cd-49d5-49f1-8cbd-fba5c71e6062',
        type      : 'task',
        title     : '1 boeuf entier',
        completed : false
    },
    {
        id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
        type      : 'task',
        title     : '4L de jus de pomme de l\'ami briton',
        completed : true
    },
    {
      id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
      type      : 'task',
      title     : '4L de jus de pomme de l\'ami briton',
      completed : true
  },
  {
    id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
    type      : 'task',
    title     : '4L de jus de pomme de l\'ami briton',
    completed : true
}
,
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
},
{
  id        : '974f93b8-336f-4eec-b011-9ddb412ee828',
  type      : 'task',
  title     : '4L de jus de pomme de l\'ami briton',
  completed : true
}
  ];

  constructor(public shoppingListComponent: ShoppingListComponent) { }

  ngOnInit(): void {}

  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }

  toggleCompleted(task: any): void
  {
      // Toggle the completed status
      task.completed = !task.completed;

      // TODO : Update the task on the server
      //this._tasksService.updateTask(task.id, task).subscribe();

  }

}
