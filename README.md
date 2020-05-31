## React Investing Dashboard 
## Capstone Project for Epicodus React-JS
## June 2020

###### By Luke Schlessinger


##### Description
* Single page dynamic React App which utilizes separate APIs to display stock market graphs and stock ticker information. 

* Will utilize Material UI so I can practice integrating that framework with a React project and to learn more design best practices. 

* App will use "stock ticker" components in a grid and the user can add new tickers or remove default ones. 

* Will use React hooks to hold/edit/delete state for configurable components. 

##### Use Case
* Can be used by investors or anyone who wants to keep track of specfic companies, their value and changes day to day. The app would make keeping track of multiple stock prices much easier because they are all in one page. Eventually, I want to implement firebase for user authentication and to store user "favorites".


##### Minimum Viable Product
 * Basic UI setup (nav drawer menu, header stock graph, stock ticker component grid.)
 * Reusable and customizable stock ticker components which display a company name, stock price, and change from previous day. 
 * User is able to create, edit, and delete stock ticker components. 

##### Tools for MVP
 * www.alphavantage.co API for stock ticker information. I will need to find a second free stocks API due to API call limits. I plan on having one API for stock graphs and another for the stock ticker components.
 * React, React Hooks for reusable components and to hold state.
 * CSS Grid for component layouts.
 * Material UI is used for UI and header, possibily also the components.

##### Additional Features
 * Implement firebase for user authentication and to store user "favorites".
 * Add a newsfeed based on a user's specific Stock picks. This would have to implement another API and I would need to write a function to search that API based on user input. 
 * Implement a search with company suggestions based on user's partial input. Example: User wants to add Apple to their stocks. User inputs "app", or "apple", or "aapl" and the search suggests the actual stock ticker "AAPL".

##### Tools for Additional Features
 * Firebase - I would like to add multiple features that would require a database but I will finish a MVP first.
 * I think I could use Yahoo Finance News API for this. I would need to query this API using the user input and display the top news results in a new component. 
 * jQuery Autocomplete to handle partial user input. I would also need to make sure I pass this API query correctly so I receive a response back. Not sure if I would use the API results as the "autocomplete suggestions". 

##### Additional Information
* I am excited to use React Hooks for the first time in a large project. I plan to continue working on this app after leaving Epicodus and expect to make use of the app to track stocks that I own. 
