# MyReads Project

This project is a example React/Redux App for a mpa view and list of coffee shops where people can add they favorite coffee shops.

## Technical Features:
* Redux architecture
* Foursquare api usage
* Google Mpas api usage
* Data saved to firebase
* Saga Redux used to async requests

## Get Started

Install dependencies
```bash
npm install or yarn install
```
Start Project
```bash
npm start or yarn start
```
Run test
```bash
npm test or ... ok you got it already
```

## Project Organization

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── actions # All the redux actions
    ├── api # 
    │    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── components # simple stateless components
    ├── containers # more complex containers
    ├── constants # more complex containers
    │    ├── Actions.js # All the existing actions type constants. 
    ├── icons # Helpful images for your app. Use at your discretion.
    ├── reducers # Redux reducers
    ├── utils # Utils files
    │    ├── testMocks.js # Js object to use on tests
    ├── index.css # Global styles. 
    └── index.js #
```
## Next Steps
* Filter coffee shop on search
* Add tests

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).