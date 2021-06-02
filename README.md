# AUTOCHEK LOCATION API

## Description
This RESTful API which can collect the information on the different locations and also determine the distance between the locations and a configurable location which can be changed or supplied. 


## Table of Content
* [Getting Started](#getting-started)

* [Prerequisites for installation](#prerequisites-for-installation)
 
* [Installation](#installation)

 * [Test](#test)
 
 * [API End Points Test Using Postman](#api-end-points-test-using-postman)

 
 * [Features](#features)
 
 * [Built With](#built-with)
 
 * [Author](#author)


## Getting Started

### Prerequisites for installation
1. Node js
3. Git

### Installation
1. Clone this repository into your local machine:
```
e.g git clone https://github.com/Akius1/autochek-location-app.git
```
2. Install dependencies 
```
e.g npm install.
```
3. Start the application by running the dev script.

```
e.g npm run start:dev
```

4. Install postman to test all endpoints on port 3000.

### Test
Run test use  ```npm run test```.

### API End Points Test Using Postman
Below is the link to the api documentation
https://documenter.getpostman.com/view/12709920/TzY3BbKE


## Features

 ### Primary Features

 * User can view all locations
 * User can create new Locations
 * User view a single location by Id 
 * User can update Locations details
 * User can delete locations
 


 ### Incomplete Features

 * A routev to calculate locations

## Built With

* SERVER : Nestjs

* DATABASE : PostgreSQL

* ORM : TypeORM

* Testing : Unit Testing : Jest

## Author
*  [Andrew Urom](https://www.linkedin.com/in/andrew-urom-188a61a1/)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
