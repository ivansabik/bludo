Donors = new Mongo.Collection('donors');
Postings = new Mongo.Collection('postings');

// Fill in sample data (donors and postigs) for a fresh installation and test suites

Meteor.startup(function() {
  if (!Donors.findOne()) {
    Donors.insert({
      firstName: 'Amanda',
      lastName: 'Mandel',
      contactNumber: '5265622225111',
      email: 'mandel@brot.org',
      address: 'Fernando Espinosa Gutierrez',
      bloodGroup: 'O+'
    });
    Donors.insert({
      firstName: 'Ivan',
      lastName: 'Erickssohn',
      contactNumber: '5215566544452',
      email: 'banano@mexico.com',
      address: 'Javier Barros Sierra',
      bloodGroup: 'O+'
    });
    Donors.insert({
      firstName: 'Jacques',
      lastName: 'Jackson',
      contactNumber: '521559000987',
      email: 'jacques@google.com',
      address: 'Roberto Medellin',
      bloodGroup: 'O+'
    });
    Donors.insert({
      firstName: 'Maximiliano',
      lastName: 'Ordaz',
      contactNumber: '529933177437',
      email: 'max@steel.com',
      address: 'Bosque de Radiatas',
      bloodGroup: 'A+'
    });
    Donors.insert({
      firstName: 'Bernardo',
      lastName: 'Rodriguez',
      contactNumber: '525514662514',
      email: 'bernie@ine.gob.mx',
      address: 'Paseo de los tamarindos',
      bloodGroup: 'A+'
    });
  }
  if (!Postings.findOne()) {
    Postings.insert({
      lat: 19.37554,
      lon: -99.2534,
      ip: '187.160.20.42',
      timestamp: '',
      editLink: '2j32b3',
      isActive: true
    });
    Postings.insert({
      lat: 19.37296,
      lon: -99.25366,
      ip: '189.219.93.219',
      timestamp: '',
      editLink: 'ddk281',
      isActive: true
    });
    Postings.insert({
      lat: 19.37375,
      lon: -99.25964,
      ip: '201.173.64.244',
      timestamp: '',
      editLink: 'p1k28d',
      isActive: true
    });
    Postings.insert({
      lat: 19.38858,
      lon: -99.25242,
      ip: '187.160.145.117',
      timestamp: '',
      editLink: 'cx98s7',
      isActive: true
    });
    Postings.insert({
      lat: 19.38552,
      lon: -99.25395,
      ip: '187.161.152.32',
      timestamp: '',
      editLink: 'as01j2',
      isActive: true
    });
  }
});
