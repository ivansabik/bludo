Bludo
=====

Bludo is a sample app using Meteor and React. The sample app develops a blood donation system to facilitate the patients from all around the world, find blood donors near them.

## Users

- Donor: Can list as a donor using their current location and posting personal information and blood type which can be used by patients to contact them directly
- Patient: Can search for donors near their current location by seeing points in a map

![](https://raw.githubusercontent.com/ivansabik/bludo/master/doc/use_cases.png)

## Non functional specs

- Single page app
- Geolocation features (HTML5)
- The postings should on the map should load real time, also new postings
- Lazy loading for geopoints on a map. Only the pins that belong to the visible area of map should be loaded. As the user navigates the map, more pins should load accordingly
- Update views in real time without needing page refresh, as records get updated in the db
- Db should be NoSQL, MongoDb namely

## Donor user stories

- As a donor I should be able to see a map centered around my current location when I first open the app
- As a donor I should be able to search for a location using an input form
- As a donor I should be able to find my location and tap/click on it and open a form in a popup
- As a donor I should be able to add contact info and blood group (first name, last name, contact number, email, address, blood group)
- As a donor I should be able to see a message if any input field has wrong format (wrong email address, telephone, etc)
- As a donor I should be able to see a success message with a unique private link after registration from where he can edit or delete my posting

## Patient user stories

- As a patient I should be able to see a map centered around my current location when I first open the app
- As a patient I should be able to see all the donor postings as small pins at their respective coordinates
- As a patient I should be able to see new pins (if existing) the moment I pan the map to another position
- As a patient I should be able to click on a posting pin and a popup should appear displaying the donor’s information
- As a patient I should be able to see pins as they get added by new donors without refreshing the browser page
- As a patient I should be able to click a text (click to show) e-mail and phone number of the donor

## Models

![](https://raw.githubusercontent.com/ivansabik/bludo/master/doc/models.png)

### Donor

+firstName: string
+lastName: string
+contactNumber: string
+email: string
+address: string
+bloodGroup: string

### Posting

+lat: float
+lon: float
+ip: string
+timestamp: string
+editLink: string
+donor: Donor
+isActive: boolean

## Tools

- Javascript (JS)
- Meteor
- React
- MongoDb
- Leaflet
- L.GeoSearch
- Zombie
- Jasmine

## Routes

## Views

## Deploy

```
$ cd bludo
$ meteor
```
