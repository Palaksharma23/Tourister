
<div align="center">
<img src="https://i.ibb.co/pWPRk2n/Tourister.jpg" alt="Tourister logo" height ="auto" width="400" />
<br>
  <h1>Tourister✈</h1>
  <p>
Tourister is a website that helps in managing Tours. It streamlines the planning and organization process for tour operators and individuals, making it easier and more efficient to plan and book tours.
  </p>
</div>

<br>
<br>

## Deployed Link
<b>You can  check the deployed website here 👉: </b> [Tourister](https://touristerapp.onrender.com/)


## Technologies and Features
<br>

| Technology | Features |
|------------|----------|
| Node.js, Express.js    |  Backend of the application  |   
|    MongoDB Atlas, Mongoose    | Database for the application
| Stripe     |   Online Payment Page     |     
| Bcrypt     |    Password Management      |   
| JSON Web Token     |    Authorization and Authentication |     |   Pug      |  Server Side Rendering |
|   SendGrid      |  Mail Services |
| Render     |     Deployment     |   
<br>

This project consists of wide variety of advanced features: 

1) Fast, feature rich REST API (includes filters, sorts, pagination, and much more)
2) Security Features such as Rate Limiting, Password Encryption, etc.
<br>

## Top-level directory structure

    .
    ├── controllers             # This folder contains the controllers of the application. These controllers handle incoming requests from clients, interact with the model to retrieve or update data, and send responses back to the client.
    ├── models                  # This folder handles the data and manages the schema of the data to be stored in the database.
    ├── public                  # This folder handles images, JavaScript, and CSS that are related to the website and can be accessed by the client.
    ├── Routes                  # This folder handles the routes of the application, determining what actions need to be performed for specific routes.
    ├── utils                   # This folder manages the utility files that contain classes used throughout the website.
    ├── views                   # This folder manages the templates used to generate the view of the website.
    ├── .eslintrc.json                   
    ├── .gitignore                   
    ├── .prettierrc                 
    ├── app.js                    
    ├── package-lock.json                     
    ├── package.json
    ├── README.md                    
    └── server.js

<div align="center">
<img src="https://i.ibb.co/BK8KLHM/MVC-Architecture.jpg" alt="mvc architecture" height="400"/>
</div>
<br/>

<table>
  <tr>
    <td>Home page of the website</td>
    <td>Login Page</td>
  </tr>
  <tr>
    <td>
   <img src="https://i.ibb.co/njFW5Qh/screely-1677924845579.png" alt="screely-1677924845579" border="0">
    </td>
     <td>
<img src="https://i.ibb.co/dBmFxDT/screely-1677925195556.png" alt="screely-1677925195556" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>SignUp Page</td>
    <td>Reviews Section</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/DVcgPc4/screely-1677924790571.png" alt="screely-1677924790571" border="0"></td>
<td><img src="https://i.ibb.co/kKSkrL4/screely-1677925542185.png" alt="screely-1677925542185" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>Details Page</td>
    <td>Book tour</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/N6g9zS3/screely-1677925947288.png" alt="screely-1677925947288" border="0"></td>
<td><img src="https://i.ibb.co/gt8R4XW/screely-1677925714239.png" alt="screely-1677925714239" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>Payment Page</td>
    <td>Booked Tours</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/HpKYqvk/screely-1677926181141.png" alt="screely-1677926181141" border="0"></td>
<td><img src="https://i.ibb.co/3NfTPfR/screely-1677926433166.png" alt="screely-1677926433166" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>Account Settings</td>
    <td>Password Settings</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/dgPPW8T/screely-1677926508351.png" alt="screely-1677926508351" border="0"></td>
<td><img src="https://i.ibb.co/XjvTg7V/screely-1677926517753.png" alt="screely-1677926517753" border="0"></td>
  </tr>
</table>

## Installation
<br>

To setup the project on your local environment, follow the given steps:

1. Fork the [Palaksharma23/Tourister](https://github.com/Palaksharma23/Tourister) repository.
2. Clone the repository:


  Replace the `<USERNAME>` with your GitHub username. 

Install dependencies

```bash
  npm install
```

To start the server in development mode

```
  npm run dev 
```

For monitoring changes in the development mode, create a new terminal and run the following command in the directory
``` 
  npm run watch:js
```

To start the server in production mode

```
  npm run start:prod 
```

Go to `localhost:3000` to view the website.
<br>

 
