import {browser, by, element} from 'protractor';

describe('E2E Tests - ngrx', function() {
  it('should increment counter, decrement counter and reset counter', function() {
    browser.get('/ngrx/index.html');
  
    const increment = element(by.css('#increment'));
    const decrement = element(by.css('#decrement'));
    const value = element(by.css('#value'));

    increment.click()
    .then(() => {
      return value.getText();
    })
    .then(counterValue => {
      expect(counterValue).toBe('Current Count: 1');
      return decrement.click();
    })
    .then(() => {
      return value.getText();
    })
    .then(counterValue => {
      expect(counterValue).toBe('Current Count: 0');
      return increment.click();
    })
  });
});
