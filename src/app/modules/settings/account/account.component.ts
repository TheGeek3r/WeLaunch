import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'settings-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountForm: FormGroup;
  disabled = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this._formBuilder.group({
      name    : ['Brian Hughes'],
      username: [ {value:"Mahesh", disabled: true} ],
      title   : ['Senior Frontend Developer'],
      company : ['YXZ Software'],
      about   : ['Hey! This is Brian; husband, father and gamer. I\'m mostly passionate about bleeding edge tech and chocolate! 🍫'],
      email   : ['hughes.brian@mail.com', Validators.email],
      numberOfPeople : [5]
  });
  }
}
