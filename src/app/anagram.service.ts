import { Injectable } from '@angular/core';
import { StringsInput } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {

  constructor() { }

  checkIfStringsAreAnagrams(stringsInput: StringsInput): boolean {
    var strigns = stringsInput;
    var dict1: { [id: string]: number } = {};
    var dict2: { [id: string]: number } = {};

    if (strigns.string1.length != strigns.string2.length)
    {
      return false;
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
    
    for (let char in dict1) {
      if (dict1[char] !== dict2[char]) {
        return false;
      }
    }
    for (let char in dict2) {
      if (dict1[char] !== dict2[char]) {
        return false;
      }
    }
    
    return true;
  }
}