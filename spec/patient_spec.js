var Browser = require('zombie');
var url = 'http://work.krasimirtsonev.com/git/blog-posts/TestingWithZombieJS/site/';
var browser = new Browser();
var CONFIG = require('./config');

describe('When a user first lands the app', function () {
    it('should display a link for using the app as patient', function (next) {
        browser.visit(CONFIG.PATIENT_URL, function (err) {
            expect(true).toBe(false);
            next();
        })
    });
});

describe('When a donor succesfully creates a new posting', function () {
    it('should display a new pin without needing to do page refresh', function (next) {
        browser.visit(url, function (err) {
            expect(true).toBe(false);
            next();
        })
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