import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-zh',
  templateUrl: './lang-zh.component.html',
  styleUrls: ['./lang-zh.component.css']
})
export class LangZhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// lang-zh.ts

export const LANG_ZH_NAME = 'zh';

export const LANG_ZH_TRANS = {
    'hello world': '你好，世界',
};