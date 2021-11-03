import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  members: any[];
  roles: any[];

  /**
   * Constructor
   */
  constructor()
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Setup the team members
      this.members = [
          {
              avatar: 'assets/images/avatars/male-01.jpg',
              name  : 'Dejesus Michael',
              email : 'dejesusmichael@mail.org',
              status : 'A Valider'
          },
          {
              avatar: 'assets/images/avatars/male-03.jpg',
              name  : 'Mclaughlin Steele',
              email : 'mclaughlinsteele@mail.me',
              status : 'Validé'
          },
          {
              avatar: 'assets/images/avatars/male-07.jpg',
              name  : 'Lamb Underwood',
              email : 'lambunderwood@mail.me',
              status : 'Validé'
          },
          {
              avatar: 'assets/images/avatars/male-08.jpg',
              name  : 'Mcleod Wagner',
              email : 'mcleodwagner@mail.biz',
              status : 'En Attente'
          },
          {
              avatar: 'assets/images/avatars/female-07.jpg',
              name  : 'Shannon Kennedy',
              email : 'shannonkennedy@mail.ca',
              status : 'En Attente'
          }
      ].sort((a, b) => a.status > b.status ? 1 : a.status === b.status ? 0 : -1);

      // Setup the roles
      this.roles = [
          {
              label      : 'En Attente',
              value      : 'read',
              description: 'Can read and clone this repository. Can also open and comment on issues and pull requests.'
          },
          {
              label      : 'Validé',
              value      : 'write',
              description: 'Can read, clone, and push to this repository. Can also manage issues and pull requests.'
          },
          {
              label      : 'Admin',
              value      : 'admin',
              description: 'Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators.'
          }
      ];
  }

  getDetail(status: string, name: string){
    return status === "En Attente" ? name + " doit valider votre demande d'ami" : "Vous devez valider la demande de " + name;
  }

  addFriend(){
    console.log("test");
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

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
