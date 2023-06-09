# Data for Countries
### This is a project that utilizes the REST API provided by restcountries.com to display data for different countries in a machine-readable format.

[![Powered by React](https://img.shields.io/badge/Powered%20by-React-blue.svg)](https://reactjs.org/)

This is part of the university of Helsinki's Fullstackreact course

- Lets dive in

## Features - step 1

The first step of the project involves creating a simple user interface where users can search for countries and view their data. When a user types a search query into the search field, the application retrieves the data from the endpoint all.
If the search query matches more than one country but less than ten, all matching countries are shown in a list. When only one country matches the query, the application displays the basic data for that country, its flag, and the languages spoken.

## Features - step 2

In this step, the application is improved such that when multiple countries are displayed on the page, a button is added next to each country's name. When the user clicks the button, the view for that country is shown.

## Features - step 3

In the final step of the project, the application is updated to display the weather report for the capital of the country whose data is being shown. To achieve this, the application utilizes an API such as openweathermap.org.

Note that you need an API key to use most weather services. Do not save the API key to source control or hardcode it into your source code. Instead, use an environment variable to store the key. You can access the value of the key from the process.env object.

## Tech

This application uses a number of open source projects to work properly:

- restcountries.com
- React
- Axios

## Installation

This application requires npm to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
The project should then run in your local environment [localhost://3000]
```

For production environments...

```sh
npm install axios
```

I hope to add more features and uplift the UI, obviously, it really needs some facelift


## License

MIT

**Free to copy, Hell Yeah!**