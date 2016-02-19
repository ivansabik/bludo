var Browser = require('zombie');
var browser = new Browser();
var URL = 'http://localhost:5000';

// User cases specs test suite for donors

describe('When a user first lands the app', function() {
  it('should display a link for using the app as donor', function(next) {
    browser.visit(URL + '/', function(err) {
      expect(browser.success).toBe(true);
      expect(browser.query('#donor-mode')).toBeDefined();
      next();
    });
  });
});

describe('When a donor starts app in donor mode', function() {
  it('should display a map', function(next) {
    browser.visit(URL + '/donor', function(err) {
      expect(browser.query('#map')).toBeDefined();
      next();
    })
  });
  it('should display an input form to search his location', function(next) {
    expect(browser.query('#leaflet-control-geosearch-qry')).toBeDefined();
    next();
  });
  it('should display an icon to add a new posting', function(next) {
    expect(browser.query('#add-posting')).toBeDefined();
    next();
  });
});

describe('When a donor taps in the map', function() {
  it('should display a popup with a form to fill out posting info', function(next) {
    browser.click('#add-posting', function(err, browser, status) {
      expect(browser.query('#first-name')).toBeDefined();
      expect(browser.query('#last-name')).toBeDefined();
      expect(browser.query('#address')).toBeDefined();
      expect(browser.query('#email')).toBeDefined();
      expect(browser.query('#tel')).toBeDefined();
      expect(browser.query('#blood-group')).toBeDefined();
      next();
    })
  });
});

describe('When a donor tries to create a a new posting with wrong field formats', function() {
  it('should display a message for email', function(next) {
    browser.click('#add-posting', function(err, browser, status) {
      browser
        .fill('input[name=email]', 'hollywood')
        .click('#new', function(err, browser, status) {
          // Error msg for validation
          next();
        })
    })
  });
});

describe('When a donor succesfully creates a new posting', function() {
  it('should display a success message', function(next) {
    browser.click('#add-posting', function(err, browser, status) {
      browser
        .fill('input[name=first-name]', 'Ivan')
        .fill('input[name=last-name]', 'Erickssohn')
        .fill('input[name=email]', 'banano@mexico.com')
        .fill('input[name=tel]', '5215566544452')
        .fill('input[name=address]', 'Javier Barros Sierra')
        .fill('input[name=blood-group]', 'O+')
        .click('#new', function(err, browser, status) {
          expect(browser.query('#thanks')).toBeDefined();
          next();
        })
    })
  });
  it('should display a unique private link to update or delete his posting', function(next) {
    expect(browser.query('#edit-url')).toBeDefined();
    next();
  });
});
