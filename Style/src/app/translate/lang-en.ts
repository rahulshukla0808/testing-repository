import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-en',
  templateUrl: './lang-en.component.html',
  styleUrls: ['./lang-en.component.css']
})
export class LangEnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// lang-en.ts

export const LANG_EN_NAME = 'en';

export const LANG_EN_TRANS = {
    'hello world': 'hello world',
};
