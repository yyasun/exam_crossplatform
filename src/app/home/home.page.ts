import { Component } from '@angular/core';
import { StringsInput } from '../form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  show_output: boolean = false;
  isAnagram: boolean = true;
  constructor() { }

  checkIfStringsAreAnagrams(stringsInput: any) {
    var strigns = stringsInput as StringsInput;
    var dict1: { [id: string]: number } = {};
    var dict2: { [id: string]: number } = {};
    this.show_output = true;
    if (strigns.string1.length != strigns.string2.length)
    {
      this.isAnagram = false;
      return;
    }
    for (let i = 0; i < strigns.string1.length; i++) {
      if (!(strigns.string1[i] in dict1)) {
        dict1[strigns.string1[i]] = 0;
      }

      dict1[strigns.string1[i]] += 1

      if (!(strigns.string2[i] in dict2)) {
        dict2[strigns.string2[i]] = 0;
      }

      dict2[strigns.string2[i]] += 1
    }

    this.isAnagram = true;
    
    for (let char in dict1) {
      if (dict1[char] !== dict2[char]) {
        this.isAnagram = false;
        break;
        return;
      }
    }
    for (let char in dict2) {
      if (dict1[char] !== dict2[char]) {
        this.isAnagram = false;
        break;
        return;
      }
    }
  }
}
