# TGCProject3 - Vue2 Earphone App

## Intro
This is a mobile responsive web app built with bootstrap 5 UI framework and consume the bluetooth earphone REST API from [TGC project 2](https://github.com/dkdq/p2-product-reviews-rest-api "https://github.com/dkdq/p2-product-reviews-rest-api"). This app is designed to be multipurpose such as e-commerce and admin management system.
It was created using HTML5, CSS3, JavaScript, Vue2.js, and hosted on Github.

User are able to search, read, edit, delete the earphone post with login authentication (email and password). Although our server is built encryption system to hash all the users' password, please don't use any online banking related password. 

## Context
Bluetooth earphones are growing popular nowadays. Most people own at least one as their daily commuter companion to embrace themselves with their favorite music/drama/video/calls/etc or just to give themselves a peaceful noise reduced environment.

## Goal
Thus our goal is to gather information of bluetooth earphone about any best budget friendly/functional purposed/branded or as long as it work its way. Any features include price, color, type, connector port, water&dustproof etc.

## Target Audience
Any bluetooth user can contribute their user experiences or anyone who need a shopping research before purchasing. 

## Tech used
**Frontend**
- `HTML5` a markup language used for structuring and presenting content on the World Wide Web
- ` Cascading Style Sheets 3/CSS3` a style sheet language used to style and layout web pages
- `Bootstrap5` a CSS framework directed at responsive, mobile-first front-end web development.
- `Bootstrap Icons` a icon library which can use with or without Bootstrap.
- `JavaScript` the programming language for the Web
- `Vue2.js` a JavaScript framework for building user interfaces
- `Vue Router` the official library for page navigation in Vue applications
- `Vuex` a state management pattern + library for Vue applications
- `Axios` a library used to send asynchronous HTTP requests to REST endpoints

**Platform and Software**
- `Github` an Internet hosting service for software development and version control using Git
- `Gitpod` a platform for remote software development

## Vue2.js in-depth
**Views/Routes**
- Home
- NotFound
- Admin (Navigation Guard)
- Login
- Register
- Profile
- Product
- ProductAdd
- ProductEdit

**Components**
- MiniCart
- Modal (reusable) by Admin, Profile
- NavigationBar
- NotificationList
- Notification Message (reusable) by many events except NotFound page
- ProductListProduct
- Product Form (reusable) by ProductAdd, ProductEdit
- User Form (reusable) by Login, Register, Profile

**Parent props & Child emits**
- Home(p) --> ProductListProduct(p) --> Product
- Admin(p), Profile(p) <----> Modal(e)
- Login(p), Register(p), Profile(p) <----> User Form(e)
- NotificationList(p) --> Notification Message
- ProductAdd(p), ProductEdit(p) <----> Product Form(e)

**Vuex**
- MiniCart
- NavigationBar
- Notification Message
- Local storage
- API calls + JWT Authentication

**Data Binding**
- attribute: MiniCart,
- class: MiniCart, Modal
- style: 

**Others**
- $ref: NavigationBar
- click:

## Credits
- Trent Global College & Tutor Paul [Link](https://www.trentglobal.edu.sg/diplomainsoftwaredevelopment/)
- Stack Overflow for js & vuejs issues [Link](https://stackoverflow.com/questions/45264923/how-to-return-boolean-and-not-string-when-using-select) [Link](https://stackoverflow.com/questions/46967096/using-multiple-filters-in-v-for-directive-in-vue-2-0) [Link](https://stackoverflow.com/questions/57680426/vuejs-ternary-operator-conditional-not-working-in-v-bind-style)
- Error Handling with Vuex [Terabyte Tiger](https://terabytetiger.com/lessons/error-handling-in-vue-with-vuex)
- Vuejs Forum [Link](https://forum.vuejs.org/t/vuex-brief-display-of-previous-data-before-loading-new-data/22090)
- Vue & JWT Authentication [Bezkoder](https://www.bezkoder.com/jwt-vue-vuex-authentication/)
- Medium [Modal](https://medium.com/js-dojo/how-to-build-a-reusable-vuejs-modal-component-fc8d7f3b4735)
- CSS [Link](https://www.cssmine.com/blog/2020-02-12-css-object-fit-and-object-position-properties-crop-images-embedded-in-html)