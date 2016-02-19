var Browser = require('zombie');
var browser = new Browser();
var URL = 'http://localhost:5000';

// User cases specs test suite for patients

describe('When a user first lands the app', function() {
  it('should display a link for using the app as patient', function(next) {
    browser.visit(URL + '/', function(err) {
      expect(browser.success).toBe(true);
      expect(browser.query('#donor-mode')).toBeDefined();
      next();
    });
  });
});

/*
 /*
 As a patient I should be able to see a map centered around my current location when I first open the app
 As a patient I should be able to see all the donor postings as small pins at their respective coordinates
 As a patient I should be able to see new pins the moment I pan the map to another position
 As a patient I should be able to click on a posting pin and a popup should appear displaying the donor’s information
 As a patient I should be able to click a text (click to show) e-mail and phone number of the donor
 */
