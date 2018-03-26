# Seattle Doctor Lookup

### API, Node, and Javascript Exercise for Epicodus, 03/25/2018
### By Tyler Kostelak

## Description
_This project is a foray into utilizing APIs, and the user is able to search for a doctor by illness and/or Doctor name._

## Specifications

### Behavior Driven Development

1. First, the user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fir the search query.

2. Next, a user should be able to enter a name and they should receive all doctors in the Seattle area that fit the search query.

3. After the previous behavior is functional, a successful query should return the doctor's first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.

4. Once the previous behaviors have been implemented, then the app should return a situation-specific error message that explains the error.

## Setup/Installation Requirements
1. Clone this repository
2. Navigate to https://developer.betterdoctor.com/, create an account, and then access your API key.
3. Create a .env file at the root level of the project and place your API key in the file as exports.apiKey="your API key here"
4. Be sure to add the .env file to your .gitignore file
5. Run the following commands in terminal:
    npm install dotenv-webpack --save-dev (and add the plugin to your webpack.config.js file)
    npm install
    npm run start
6. Enjoy using the app!

## Known Bugs
There are no known bugs at this time.

## Support and contact details
If you have suggestions for how to help me make any additions, or if you have other feedback, please feel free to contact me at tkostelak@gmail.com. All feedback is welcome, keep in mind that the primary focus of this project is APIs.

## Technologies Used
Node
Javascript
Jquery
Postman
BetterDoctor API

## License
The software is licensed under the MIT license.

Copyright (c) 2018 Tyler Kostelak
