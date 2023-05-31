import { Component } from '@angular/core';
import { StringsInput } from '../form/form.component';
import { AnagramService } from '../anagram.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  show_output: boolean = false;
  isAnagram: boolean = true;
  constructor(private anagramService: AnagramService) { }

  checkIfStringsAreAnagrams(stringsInput: any) {
    var strigns = stringsInput as StringsInput;
    this.show_output=true;
    this.isAnagram = this.anagramService.checkIfStringsAreAnagrams(strigns);
  }
}