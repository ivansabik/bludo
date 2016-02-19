// Routes for donors and patients

Router.route('/', function () {
  // Should redirect to welcome
});

Router.route('/welcome', function () {
  this.render('Welcome');
});

// This route gets user location and displays a map for donors
Router.route('/donor', function () {
  var latlon = [];
  this.render('DonorMap', {data: item});
});

// This route displays an input form for adding a new post
Router.route('/posting/new', function () {
  this.render('PostingNew');
});

// This route handles when a donor wants to submit (add) a new post, validates and displays error messages
Router.route('/posting/submit', function () {
});

Router.route('/posting/edit/:id', function () {
  this.render('PostingEdit');
});

Router.route('/posting/delete/:id', function () {
  this.render('PostingDelete');
});

Router.route('/patient', function () {
  var latlon = [];
  this.render('PatientMap', {data: item});
});

Router.route('/posting/view/:id', function () {
});
