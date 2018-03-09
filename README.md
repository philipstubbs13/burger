# Good Burger

## Table of contents
  * [Live](#live)
  * [About this project](#about-this-project)
  * [Getting started](#getting-started)
  * [Structure of the project](#project-structure)
  * [Screenshots](#screenshots)
  * [Technologies used to create app](#technologies-used)
  	* [Backend technologies](#Backend)
  	* [Frontend technologies](#Frontend)
  * [Design improvements](#design-improvements)
  * [Issues](#Issues)

## <a name="live"></a>Live
https://gentle-caverns-56054.herokuapp.com/

## <a name="about-this-project"></a> About this project
This project is a full stack application that allows you to place an order for a burger. When you place an order, the burger you enter in the form field is added to the list of burgers on the left side of the screen. Each burger in the list has a <b>Devour me</b> button. Clicking this button moves the burger from the list on the left side of the screen to the list on the right. The list on the right is a list of burgers that have already been devoured. Each burger in this list has a <b>Throw away</b> button that allows you to remove the burger, which deletes the burger from the user interface as well as from the MySQL database. 

This project uses MySQL, Node, Express, Handlebars, and an ORM (Object Relational Mapper). Node and MySQL are used to query and route data in the application. Express is used to create the server for the application, and Handlebars is a templating language that is used to generate the HTML.

This project also follows the MVC (Model-View-Controller) design pattern. The MVC design pattern assigns objects in the application one of three roles (model, view, or controller) and defines the way the different parts of the application communicate with one another.

  * </b>View object:</b>
  A view object is an object in the application that is visible (in the user interface) to the end user of the application. The view object displays data from the application's model and learns about any changes to the model data via the controller. For example, in this application, the user enters a burger name in a text field. The view object communicates this user change via the controller to the model.

  * <b>Controller object:</b>
  A controller object is an intermediary between the view and the model. This object interprets any user changes made in the view object and communicates the new or changed data to the model. Also, if the model were to change, the controller is what communicates the updated data to the view so that the user can see the new or updated data in the user interface.

  * <b>Model object:</b>
  A model object manages the application data. When data is created or changed by the user in the view (for example, a user devours or deletes a burger), that change is communicated via the controller to the model. Also, when data is created or changed in the model, the model communicates that change via the controller to the view to display the new or updated data.

For more information about the MVC design pattern, check out this link for a high level overview: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

## <a name="getting-started"></a> Getting started

  1. [Step 1](#step-one)
  2. [Step 2](#step-two)
  3. [Step 3](#step-three)
  ...

### <a name="step-one"></a> Step 1

### <a name="step-two"></a> Step 2

### <a name="step-three"></a> Step 3

## <a name="project-structure"></a> Structure of the project


## <a name="screenshots"></a> Screenshots

### Welcome to Good Burger
<img src="readme_images/home2.png">
<br>
<br>
<img src="readme_images/all_burgers.png">

### Burgers
<img src="readme_images/burgers.png">

### Devoured burgers
<img src="readme_images/devoured.png">

## <a name="technologies-used"></a> Technologies used to build app
In this section, list the technologies (backend and frontend) used during the project.
* [Backend technologies](#Backend)
* [Frontend technologies](#Frontend)

### <a name ="Backend"></a> Backend technologies
* Node.js
* MySQL
* Express
* Express Handlebars

### <a name="Frontend"></a> Frontend technologies
* HTML
* CSS
* Bootstrap
* Javascript


## <a name="design-improvements"></a> Design improvements


## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/burger/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>