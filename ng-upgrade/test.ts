import {browser, by, element} from 'protractor';

describe('E2E Tests NgUpgrade', function() {
  it('should recieve greetings from both AngularJS and Angular', function() {
    browser.get('/ng-upgrade/index.html');
    
    const angular = element(by.css('#angular'));
    const angularJS = element(by.css('#angularJS'));
    
    angular.getText().then(t => expect(t).toEqual('Hello from new Angular'));
    angularJS.getText().then(t => expect(t).toEqual('Hello from AngularJS'));
  });
});
