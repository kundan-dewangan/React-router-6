# Reactjs folder structure with react router 6

If you are just getting started with React, you are probably using create-react-app as your toolchain. After Create react App make the following folder structure.

## Hava Multiple Router
React Router is a standard routing library for React, we're building a browser-based application, we can use two types of router from the React Router. I'm set mulple route in this folder structure

## Authentication with state 
Anthentication using simple use state

## Redux
Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture

## React-Saga
Redux-Saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures


**Note: this is a for practice purpose not for your own use!**

## Command for installation

### `npm install`
### `npm start`



## Important Points
React Router v6 introduces a Routes component that is kind of like Switch, but a lot more powerful. The main advantages of Routes over Switch are:

All <Route>s and <Link>s inside a <Routes> are relative. This leads to leaner and more predictable code in <Route path> and <Link to>
Routes are chosen based on the best match instead of being traversed in order. This avoids bugs due to unreachable routes because they were defined later in your <Switch>
Routes may be nested in one place instead of being spread out in different components. In small to medium sized apps, this lets you easily see all your routes at once. In large apps, you can still nest routes in bundles that you load dynamically via React.lazy
In order to use v6, you'll need to convert all your <Switch> elements to <Routes>. If you already made the upgrade to v5.1, you're halfway there.

First, let's talk about relative routes and links in v6.