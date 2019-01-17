# Express-React-Portfolio

New portolio application made using Node, Express, React and CSS Flexbox.

Overview:
The application was designed to highlight my coding portfolio. This full-stack single page application contains views for Home, About Me, Portfolio, Blog, and Contact pages. The Contact page is fully functional and uses nodemailer to send the inputed information to a specified email address.

This apllication is an updated version of the React-Portfolio page I deployed in November. Much of the styling is the same as in that application https://github.com/pckearney25/React-Portfolio. The major coding changes include the addition of a node server to handle the routing. In the previous apllication one could not use links to the blog posts to view them directly. The use of the server also enables the nodemailer package to send information entered on the contact page to a (server-side)specified email account. The code for the Contact component/page was also significantly altered. In the previous version the code was written for now deprecated POST methods on GoDaddy. In the current version routing to the node server.js has been added. In addition, in order to make the page more user friendly, code/styling has been added to let the user know if missing fields need to be filled out, the message has been sent, or (heaven forbid) the message failed to send because of difficulties with the server.

Authors:
The Express-React-Portfolio presented here was coded by Patrick Kearney.

Installation
Upon downloading/cloning the application from this GitHub repository, a potential user will need to install the packages outlined in the package.json files in both the root and client directories. The installation of yarn is recommended for consistent package management for recoding purposes.

Built With
JavaScript, Node, Express, React (https://reactjs.org/), Nodemailer, React-Vertical-Timeline, React-CSS-Transition-Group, and React-FontAwesome.

License
This project is licensed under the MIT License.

Acknowledgments
Thanks to the folks at React.js and the authors of the React styling packages that were used to enliven the site. And, as usual, thanks to the Stack Overflow community for the many helpful hints I discovered on the site as I coded this application. An additional shout out to Binh Chung for his excellent post on creating a contact form with Nodemailer, React, and Express. (https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448).
