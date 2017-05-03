import * as moment from 'moment';
import {browser, by, element} from 'protractor';

describe('E2E Tests', function() {
  it('should call moment', function() {
    browser.get('/moment/index.html');
    const div = element(by.css('div'));
    const day = moment().format('dddd');

    div.getText().then(t => expect(t).toEqual(`Happy ${day}`));
  });
});
