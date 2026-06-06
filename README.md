# Project-DA395B
Project for the course: Flerplattformsapplikationer med webbtekniker VT26. 

## Introduction
For this project we are developing a flag-quiz using the React-framework and implementing REST Countries API.

## Purpose and Target Audience
This project's purpose is to expand current knowledge of country flags and other country information [More to come]
* **Target Audience**: Students or simply people who want to learn all the flags in the world.

## Features & API Integration
* **External API**: REST Countries API [How we will use it will come later].
* **Data Storage**: The application will store user results locally on the browser using localStorage.
* **Responsive design**: The application will be fully responsive in order to being able to play from any device.


## Tool Comparison

### Framework Comparison
We choes **React** as our core framework

Initially, we considered using **Angular**. However, Angular is a framework with a steep learning curve and heavy boilerplate, making it over-engineered for our project [1]. React's component-based, library-first approach allowed us to get started quickly without the steep learning curve and heavy architectural structure [2]. 

Compared to **Vue**, React's massive ecosystem and straightforward integration with external APIs provided a seamless development for our specific use case [3].

### Build Tool
Instead of traditional bundling tools like Create React App (Webpack), we utilized **Vite** to set up our development environment. We chose Vite in order to build a modern web standard leveraging ES modules, offering fast Hot Module Replacement (HMR) and significantly faster build times [4].

### Styling
For user interface, we implemeneted **Tailwind CSS**

We explicitly avoided component-based styling libraries like **Bootstrap** or **Material UI**. These libraries heavily rely on pre-designed, rigid components that did not align with our vision of our application [5] [6]. Tailwind's utility-first approach allowed us to rapidly build a clean, custom and responsive interface directly in our markup withoutbeing constrained by an external library's component structure [7].

--

### References
* **[1] Angular Documentation:** "What is Angular?" [https://angular.dev/overview] (https://angular.dev/overview)
* **[2] React Documentation:** "React - The library for web and native user interfaces" [https://react.dev] (https://react.dev)
* **[3] Vue Documentation:** "Vue - Introduction" [https://vuejs.org/guide/introduction] (https://vuejs.org/guide/introduction)
* **[4] Vite Documentation:** "The Build Tool for the Web" [https://vite.dev] (https://vite.dev)
* **[5] Bootstrap Documentation:** "Build fast, responsive sites with Bootstrap" [https://getboostrap.com] (https://getbootstrap.com)
* **[6] Material UI Documentation:** "Ready to use Material Design components" [https://mui.com/material-ui] (https://mui.com/material-ui)
* **[7] Tailwind CSS Documentation:** "Rapidly build modern websites without ever leaving your HTML" [https://taildwindcss.com] (https://tailwindcss.com)
