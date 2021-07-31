import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {


 activities = [
    {
        id          : '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon        : 'heroicons_solid:star',
        date        : moment().subtract(25, 'minutes').toISOString(), // 25 minutes ago
        extraContent: `<div><strong>Etape 1 : </strong>
                        Hi Brian,Your submission has been accepted and you are ready to move into the next phase. Once you are ready, reach out to me and we will ...</div>`
    },
    {
        id           : '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image        : 'assets/images/avatars/male-04.jpg',
        description  : '<strong>Etape 1 : </strong> added you to <strong>Top Secret Project</strong> group and assigned you as a <strong>Project Manager</strong>',
        date         : moment().subtract(50, 'minutes').toISOString(), // 50 minutes ago
        linkedContent: 'Top Secret Project',
        link         : '/dashboards/project',
        useRouter    : true
    },
    {
        id           : 'b91ccb58-b06c-413b-b389-87010e03a120',
        icon         : 'heroicons_solid:mail',
        description  : 'You have 15 unread mails across 3 mailboxes',
        date         : moment().subtract(3, 'hours').toISOString(), // 3 hours ago
        linkedContent: 'Mailbox',
        link         : '/apps/mailbox',
        useRouter    : true
    },
    {
        id           : '541416c9-84a7-408a-8d74-27a43c38d797',
        icon         : 'heroicons_solid:refresh',
        description  : 'Your <strong>Docker container</strong> is ready to publish',
        date         : moment().subtract(5, 'hours').toISOString(), // 5 hours ago
        linkedContent: 'Download the container',
        link         : '.',
        useRouter    : true
    },
    {
        id          : 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image       : 'assets/images/avatars/male-06.jpg',
        description : '<strong>Roger Murray</strong> accepted your friend request',
        date        : moment().subtract(7, 'hours').toISOString(), // 7 hours ago
        extraContent: `You have <span class="font-semibold">8</span> mutual friends.`
    },
    {
        id         : 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
        image      : 'assets/images/avatars/female-04.jpg',
        description: '<strong>Sophie Stone</strong> sent you a direct message',
        date       : moment().subtract(9, 'hours').toISOString() // 9 hours ago
    },
    {
        id           : 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon         : 'heroicons_solid:mail',
        description  : 'You have 3 new mails',
        date         : moment().subtract(1, 'day').toISOString(), // 1 day ago
        extraContent : `<ol class="list-decimal list-inside space-y-2">
                            <li class="font-medium">Please review and sign the attached agreement</li>
                            <li class="font-medium">Delivery address confirmation</li>
                            <li class="font-medium">Previous clients and their invoices</li>
                        </ol>`,
        linkedContent: 'Mailbox',
        link         : '/apps/mailbox',
        useRouter    : true
    },
    {
        id           : 'fd0f01b4-f3de-4333-add5-cd86850279f8',
        image        : 'assets/images/avatars/female-02.jpg',
        description  : '<strong>Tina Harris</strong> started a chat with you',
        date         : moment().subtract(1, 'day').toISOString(), // 1 day ago,
        linkedContent: 'Go to Chat (Tina Harris)',
        link         : '/apps/chat/5636c0ba-fa47-42ca-9160-27340583041e',
        useRouter    : true
    },
    {
        id         : '8f8e1bf9-4661-4939-9e43-390957b60f42',
        icon       : 'heroicons_solid:star',
        description: 'Your submission has been accepted and you are ready to sign-up for the final assigment which will be ready in 2 days',
        date       : moment().subtract(3, 'days').toISOString() // 3 days ago
    },
    {
        id         : '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
        icon       : 'heroicons_solid:refresh',
        description: 'Your Vagrant container is ready to download',
        date       : moment().subtract(4, 'day').toISOString() // 4 days ago
    }
];


ingredients = [
    {
        id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
        avatar: 'assets/images/avatars/female-10.jpg',
        name  : '20 g',
        email : 'nadiamcknight@mail.com',
        phone : '+1-943-511-2203',
        title : 'de Pommes de terre de la mer'
    },
    {
        id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
        avatar: 'assets/images/avatars/male-19.jpg',
        name  : 'Best Blackburn',
        email : 'blackburn.best@beadzza.me',
        phone : '+1-814-498-3701',
        title : 'Senior Developer'
    },
    {
        id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
        avatar: 'assets/images/avatars/male-14.jpg',
        name  : 'Duncan Carver',
        email : 'duncancarver@mail.info',
        phone : '+1-968-547-2111',
        title : 'Senior Developer'
    },
    {
        id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
        avatar: 'assets/images/avatars/male-01.jpg',
        name  : 'Martin Richards',
        email : 'martinrichards@mail.biz',
        phone : '+1-902-500-2668',
        title : 'Junior Developer'
    },
    {
        id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
        avatar: 'assets/images/avatars/female-20.jpg',
        name  : 'Candice Munoz',
        email : 'candicemunoz@mail.co.uk',
        phone : '+1-838-562-2769',
        title : 'Lead Designer'
    },
    {
        id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
        avatar: 'assets/images/avatars/female-01.jpg',
        name  : 'Vickie Mosley',
        email : 'vickiemosley@mail.net',
        phone : '+1-939-555-3054',
        title : 'Designer'
    },
    {
        id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
        avatar: 'assets/images/avatars/female-02.jpg',
        name  : 'Tina Harris',
        email : 'tinaharris@mail.ca',
        phone : '+1-933-464-2431',
        title : 'Designer'
    },
    {
        id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
        avatar: 'assets/images/avatars/male-02.jpg',
        name  : 'Holt Manning',
        email : 'holtmanning@mail.org',
        phone : '+1-822-531-2600',
        title : 'Marketing Manager'
    },
    {
        id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
        avatar: 'assets/images/avatars/female-03.jpg',
        name  : 'Misty Ramsey',
        email : 'mistyramsey@mail.us',
        phone : '+1-990-457-2106',
        title : 'Consultant'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


   /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean
    {
        return moment(current, moment.ISO_8601).isSame(moment(compare, moment.ISO_8601), 'day');
    }

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string
    {
        const today = moment().startOf('day');
        const yesterday = moment().subtract(1, 'day').startOf('day');

        // Is today?
        if ( moment(date, moment.ISO_8601).isSame(today, 'day') )
        {
            return 'Today';
        }

        // Is yesterday?
        if ( moment(date, moment.ISO_8601).isSame(yesterday, 'day') )
        {
            return 'Yesterday';
        }

        return moment(date, moment.ISO_8601).fromNow();
    }

    RemovePerson(){}

    AddPerson(){}

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
