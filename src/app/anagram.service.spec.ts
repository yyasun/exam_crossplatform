import { TestBed } from '@angular/core/testing';
import { AnagramService } from './anagram.service';
import { StringsInput } from './form/form.component';

describe('AnagramService', () => {
  let service: AnagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for anagrams', () => {
    const stringsInput: StringsInput = { string1: 'listen', string2: 'silent' };
    const result = service.checkIfStringsAreAnagrams(stringsInput);
    expect(result).toBeTrue();
  });

  it('should return false for non-anagrams', () => {
    const stringsInput: StringsInput = { string1: 'hello', string2: 'world' };
    const result = service.checkIfStringsAreAnagrams(stringsInput);
    expect(result).toBeFalse();
  });

  it('should return false if the strings have different lengths', () => {
    const stringsInput: StringsInput = { string1: 'longer', string2: 'short' };
    const result = service.checkIfStringsAreAnagrams(stringsInput);
    expect(result).toBeFalse();
  });

  it('should return false if the strings have different number of empty space', () => {
    const stringsInput: StringsInput = { string1: 'I am Lord Voldemort', string2: 'tom marVoLo rIddle' };
    const result = service.checkIfStringsAreAnagrams(stringsInput);
    expect(result).toBeFalse();
  });
});