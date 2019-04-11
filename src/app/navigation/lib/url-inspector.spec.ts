import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { UrlInspector } from './ur-inspector.service';

describe('UrlInspector', () => {
  let sut: UrlInspector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UrlInspector]
    });
    sut = TestBed.get(UrlInspector);
  });
  describe('When a path is given', () => {
    it('yields root fragment if it is parsed ', () => {
      const expected = 'root';
      const actual = sut.rootFrom(`${expected}`);

      expect(actual).toBe(expected);
    });

    it('yields root fragment for multiple fragments', () => {
      const expected = 'root';
      const actual = sut.rootFrom(`${expected}/child`);

      expect(actual).toBe(expected);
    });
  });

  describe('When no path is given', () => {
    it('yields an empty string representing the root path', () => {
      const expected = '';
      const actual = sut.rootFrom(expected);

      expect(actual).toBe(expected);
    });
  });
});
