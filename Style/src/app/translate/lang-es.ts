import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-es',
  templateUrl: './lang-es.component.html',
  styleUrls: ['./lang-es.component.css']
})
export class LangEsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// lang-es.ts

export const LANG_ES_NAME = 'es';

export const LANG_ES_TRANS = {
    'hello world': 'hola mundo',
};
