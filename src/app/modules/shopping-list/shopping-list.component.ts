import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  menuData: FuseNavigationItem[] = [];
  url: String;

  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,
              private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params => {
      if(params.get('id') == null)
        this.url = "NULL";
      else
        this.url = params.get('id');
  })

    this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened if the given breakpoint is active
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });

    this.menuData = [
      {
          title   : 'ACTIVE',
          type    : 'group',
          children: [
            {
              id   : "1",
              title: "Semaine 12 - 2021",
              type : 'basic',
              icon : "heroicons_outline:clipboard-list",
              link : '/liste-des-courses/semaine-12-2021',
              badge: { title: '24 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'},
            }
          ]
      },
      {
          title   : 'HISTORIQUE',
          type    : 'group',
          children: [
            {
              id   : "1",
              title: "Semaine 11 - 2021",
              type : 'basic',
              icon : "heroicons_outline:archive",
              link : '/liste-des-courses/semaine-11-2021',
              badge: { title: '26 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            },
            {
              id   : "1",
              title: "Semaine 10 - 2021",
              type : 'basic',
              icon : "heroicons_outline:inbox",
              link : '/liste-des-courses/semaine-10-2021',
              badge: { title: '42 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            },
            {
              id   : "1",
              title: "Semaine 9 - 2021",
              type : 'basic',
              icon : "heroicons_outline:inbox",
              link : '/liste-des-courses/semaine-9-2021',
              badge: { title: '23 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            },
            {
              id   : "1",
              title: "Semaine 8 - 2021",
              type : 'basic',
              icon : "heroicons_outline:inbox",
              link : '/liste-des-courses/semaine-8-2021',
              badge: { title: '7 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            }
            ,
            {
              id   : "1",
              title: "Semaine 7 - 2021",
              type : 'basic',
              icon : "heroicons_outline:inbox",
              link : '/liste-des-courses/semaine-7-2021',
              badge: { title: '4 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            },
            {
              id   : "1",
              title: "Semaine 6 - 2021",
              type : 'basic',
              icon : "heroicons_outline:inbox",
              link : '/liste-des-courses/semaine-6-2021',
              badge: { title: '2 Produits', classes: 'bg-accent rounded-full mx-2.5 px-2.5 text-white'}
            }
          ]
      }
  ];
  }
}
