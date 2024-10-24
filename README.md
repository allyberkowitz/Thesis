# Thesis
2 parts:
1. Database:
- Firebase-Thesis: is the Google Firebase original version, using Cloud Functions (with an emulator) and a local script (9/29 switched over)
- MongoDB-Thesis: the functional code using MongoDB which successfully pulls data into the database
  * index.js: data collection script using the api, to the db
  * server.js: connects db with website

2. Website:
  * App.js: shows the data from the db
  * script.js: connects with the db