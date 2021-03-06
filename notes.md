# Notes about Learning Front-End Web Development with React

Write down the steps and some notes about developing an application through the [course](https://www.coursera.org/learn/front-end-react/home/welcome)

## Set up Development Environment: Git and Node

### Git

Create a new repo

### Node.js and NPM

Initializing package.json
  
Installing an NPM Module

* Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files. To do this, type the following at the prompt:
    
    `npm install lite-server --save-dev`
* Next, open package.json in your editor and modify it as shown below. Note the addition of two lines, line 7 and line 9.
  
  ```json
    {
    "name": "git-test",
    "version": "1.0.0",
    "description": "This is the Git and Node basic learning project",
    "main": "index.html",
    "scripts": {
        "start": "npm run lite",
        "test": "echo \"Error: no test specified\" && exit 1",
        "lite": "lite-server"
    },
    "repository": {
        "type": "git",
        "url": "git+https://jogesh_k_muppala@bitbucket.org/jogesh_k_muppala/git-test.git"
    },
    "author": "",
    "license": "ISC",
    "homepage":     "https://bitbucket.org/jogesh_k_muppala/git-test#readme",
    "devDependencies": {
        "lite-server": "^2.2.2"
      }
    }
  ```

* Next, start the development server by typing the following at the prompt:
    
    `npm start`

Setting up .gitignore

## React

### Start

Installing Yarn

* Yarn is another package manager like NPM, but is better suited and faster to work with for React applications. So let us install yarn and use it for building our React applications.
  
Installing *create-react-app*

Generating and Serving a React Project using *create-react-app*

### Configuring a React Application

Configure your React Project to use Reactstrap

* To configure your project to use reactstrap, type the following at the prompt to install reactstrap, and Bootstrap 4:
  
  ```
   yarn add bootstrap@4.0.0
   yarn add reactstrap@5.0.0
   yarn add react-popper@0.9.2
  ```

    **NOTE** : Install these packages at the < confusion > folder

### React Components

Learn about React components and how we construct an React component and design its views.

Implement functional components in React

>MainComponent.js  
>MenuComponent.js  
>DishdetailComponent.js

### Router

Add header and footer  

Use React Router

>HeaderComponent.js  
>FooterComponent.js  

### Single Page Application

Develop the React application as a single page application

>HomeComponent.js  
>ContactComponent.js  
>AboutComponent.js

(update)
>MenuComponent.js  
>DishdetailComponent.js

### Controlled Forms

Add Send feedback in ContactComponent.js

### Uncontrolled Forms

Add Login in HeaderComponent.js

### Redux

......

## Unit Test

## Reference

[course](https://www.coursera.org/learn/front-end-react/home/welcome)

[react forms](https://react.docschina.org/docs/forms.html)

[create react app](https://facebook.github.io/create-react-app/docs/getting-started)

[unit-test-1](http://www.cnblogs.com/dh-dh/p/5432447.html)

[unit-test-2](http://www.51testing.com/html/73/n-3722073.html)