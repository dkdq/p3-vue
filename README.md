# TGCProject3 - Vue2 Earphone App

## Intro
This is a mobile responsive web app built with bootstrap 5 UI framework and consume the bluetooth earphone REST API from [TGC project 2](https://github.com/dkdq/p2-product-reviews-rest-api "https://github.com/dkdq/p2-product-reviews-rest-api"). This app is designed to be multipurpose such as e-commerce and admin management system. It was created using HTML5, CSS3, JavaScript, Vue2.js, Bootstrap5 and hosted on Netlify [link](https://chipper-sable-08dc10.netlify.app/ "p3-vue").

User are able to search, read, edit, delete the earphone post with login authentication (email and password). Although our server is built with password encryption system to hash all the users' password, please don't use any online banking related password. 

## Context
Bluetooth earphones are growing popular nowadays. Most people own at least one as their daily commuter companion to embrace themselves with their favorite music/drama/video/calls/etc or just to give themselves a peaceful noise reduced environment.

## Goal
Thus our goal is to gather information of bluetooth earphone about any best budget friendly/functional purposed/branded or as long as it work its way. Any features include price, color, type, connector port, water&dustproof etc.

## Target Audience
Any bluetooth user can contribute their user experiences or anyone who need a shopping research before purchasing. 

## Tech used
**Frontend**
- `HTML5` a markup language used for structuring and presenting content on the World Wide Web
- `Cascading Style Sheets 3/CSS3` a style sheet language used to style and layout web pages
- `Bootstrap5` a CSS framework directed at responsive, mobile-first front-end web development
- `Bootstrap Icons` a icon library which can use with or without Bootstrap
- `JavaScript` the programming language for the Web
- `Vue2.js` a JavaScript framework for building user interfaces
- `Vue Router` the official library for page navigation in Vue applications
- `Vuex` a state management pattern + library for Vue applications
- `Axios` a library used to send asynchronous HTTP requests to REST endpoints

**Platform and Software**
- `Git` a distributed version control system designed to handle coordinating work among programmers collaboratively developing source code during software development
- `Github` an Internet hosting service for software development and version control using Git
- `Gitpod` a platform for remote software development and embedded Git
- `Visual Studio Code/VS Code` a source-code editor and embedded Git

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
- attribute: MiniCart, ProductListProduct
- class: MiniCart, Modal, NotificationMessage, ProductForm
- style: App, Product

## Key Features
**Frontend**
Features | Description
 --- | --- 
Registration, Login, Logout |  Users can register, login, and logout for an account
Account management | Users can edit and delete account
Search product(s) | Users can search the details of product
Manual add-on quantity | Users can type in quantity in product page
Cart management | Users can view their order with product title, price, quantity, and total price. Users can remove product or remove all.

**Backend**
Features | Description
 --- | --- 
Registration, Login, Logout |  Only admin and staffs can access the admin panel
Manage products | Create, read, update and delete product

**Manual Testing**
Test Case # | Description | Test Steps | Expected Result | Actual Result
 --- | --- | --- | --- | ---
**Home**
1 | Load website | Access URL | Navigation bar, main section(accordian, carousel, and product card list), and footer showed | Expected
2 | Search product(s) | Type in any alphanumeric | Related product(s) showed | Expected
3 | Search product(s) | Click any checkboxes of type | Related product(s) showed | Expected
4 | Search product(s) | Pick one radio button of earbuds | Related product(s) showed | Expected
5 | Search product(s) | Select dropdown menu of connectors | Related product(s) showed | Expected
6 | Search product(s) | Combine multiple or all filters | Related product(s) showed | Expected
7 | Search product(s) | No result | Message "No Data Found!" showed | Expected
8 | Reset search | Click reset | All products showed | Expected
9 | View product page | Click product title | Requested Product page showed | Expected
**Cart**
1 | Add to cart | Click "add to cart" button | Cart added and notification showed | Expected
2 | Key in quantity to cart | Numeric only input for user and press enter or click "add to cart" button in product page | Item added and notification showed | Expected
3 | View empty cart | Click cart button in navigation bar | Empty dropdown with clear cart button showed | Expected
4 | View item(s) cart | Click cart button in navigation bar | Scrollable dropdown with both checkout and clear cart button showed | Expected
5 | Remove an item in cart | Click remove button | Item removed and notification showed | Expected
6 | Remove all items in cart | Click clear cart button | All items removed, checkout button disappeard, and notification showed | Expected
7 | Total price | Add item(s) | Generated total price of whole cart item | Expected
8 | Checkout | Click checkout button | Guest is redirect to Login page | Expected
9 | Checkout | Click checkout button | Logged user no redirect to Login page | Expected
**User**
1 | Valid login | Click login link(navigation bar) to redirect to login page then enter email and password | User redirect to home page and welcome notification showed | Expected
2 | Invalid login | Follow step 1 and enter non-exist or wrong formatted email or password | Validation notification showed | Expected
3 | Cancel login | Click cancel button | User redirect to Home page | Expected
4 | Toggle password | Click eye toggle button | Password shown betwen alphanumeric and dotted | Expected
5 | Access Admin page | Click admin link | Notification showed and redirect to Home page | Expected
6 | Logout | Click logout button | User redirect to Home page | Expected
7 | View user info | Click username link with profile icon | User redirect to Profile page | Expected
8 | Valid edit user info | Follow step 7 and enter new data then click update | User logged out, redirect to login page, and safety notification showed | Expected
9 | Invalid edit user info | Follow step 8 | Validation notification showed | Expected
10 | Pre-delete user | Follow step 7 and click delete button | Modal shown to recomfirm with user | Expected
11 | Post-delete user | Follow step 9 | User redirect to Home page and notification showed | Expected
**Admin**
1 | Valid login | Click login link(navigation bar) to redirect to Login page then enter email and password | User redirect to Admin page and welcome notification showed | Expected
2 | Navigate to Product page | Click show button | Redirect to specific Product page | Expected
3 | Navigate to "add product" page | Click "add product" | Admin redirect to ProductFormAdd page | Expected
4 | Valid add product | Follow step 1 and enter new data | Redirect to Admin page with new added product info and notification showed | Expected
5 | Invalid add product | Follow step 1 and enter new data | Validation notification showed | Expected
6 | Valid edit product | Follow step 1, click edit button, and enter new data | Redirect to Admin page and notification showed
7 | Invalid edit product | Follow step 1, click edit button, and enter new data | Validation notification showed | Expected
8 | Pre-delete product | Follow step 1 and click delete button | Modal shown to recomfirm with user | Expected
9 | Post-delete product | Follow step 1 | User redirect to Admin page and notification showed | Expected
10 | View admin info | Click username link with profile icon | Admin redirect to Profile page with no delete button | Expected
11 | Valid edit admin info | Follow step 10 and enter new data then click update | Admin logged out, redirect to login page, and safety notification showed | Expected
12 | Invalid edit admin info | Follow step 10 | Validation notification showed | Expected
13 | Cancel edit admin info | Click cancel button | User redirect to Admin page | Expected

## UIUX
**1. Strategy**
- To establish an e-commerce store selling a wide variety of earphone categories, price, and brands ranging from local to international.
- Reach out to mobile, tablet, and laptop users for access anytime.
- Good ranking in SEO search

**2. Scope**
- Functional requirements: Feeback to every user action with notifications
- Content requirements: Imagery and text for product

**3. Struture**
- Navigation bar is linking to user related
- Product card is linking to product related
- Product card filtering
- Cart is linking to price and quantity related

**4. Skeleton**
- Interface design: Background animation and password toggle
- Navigation design: Global navigation bar
- Information design: Accordian for news(text), carousel for user experiences(imagery and text), product cards listing for content(imagery and text)

**5. Surface**
- Typography: technological/futuristic
- Tones:
    - ![#222](https://placehold.co/15x15/222/222.png) *#222*
    - ![olive](https://placehold.co/15x15/olive/olive.png) *Olive*
    - ![red](https://placehold.co/15x15/red/red.png) *Red*
    - ![rgb(67, 124, 205)](https://placehold.co/15x15/437CCD/437CCD.png) *rgb(67, 124, 205)*
    - ![rgb(69, 214, 202)](https://placehold.co/15x15/45D6CA/45D6CA.png) *rgb(69, 214, 202)*
    - ![#9a9a9a](https://placehold.co/15x15/9a9a9a/9a9a9a.png) *#9a9a9a*
    - ![#bdbdbd](https://placehold.co/15x15/bdbdbd/bdbdbd.png) *#bdbdbd*
    - ![#dbdbdb](https://placehold.co/15x15/dbdbdb/dbdbdb.png) *#dbdbdb*
    - ![whitesmoke](https://placehold.co/15x15/whitesmoke/whitesmoke.png) *Whitesmoke*
- Style:
    - Box 2d manipulation
    - Animation(logo, card, modal, images, icons, buttons)

## Credits
- Trent Global College & Tutor Paul [Link](https://www.trentglobal.edu.sg/diplomainsoftwaredevelopment/)
- Stack Overflow for js & vuejs issues [Link](https://stackoverflow.com/questions/45264923/how-to-return-boolean-and-not-string-when-using-select) [Link](https://stackoverflow.com/questions/46967096/using-multiple-filters-in-v-for-directive-in-vue-2-0) [Link](https://stackoverflow.com/questions/57680426/vuejs-ternary-operator-conditional-not-working-in-v-bind-style)
- Error Handling with Vuex [Terabyte Tiger](https://terabytetiger.com/lessons/error-handling-in-vue-with-vuex)
- Vuejs Forum [Link](https://forum.vuejs.org/t/vuex-brief-display-of-previous-data-before-loading-new-data/22090)
- Vue & JWT Authentication [Bezkoder](https://www.bezkoder.com/jwt-vue-vuex-authentication/)
- Medium [Modal](https://medium.com/js-dojo/how-to-build-a-reusable-vuejs-modal-component-fc8d7f3b4735)
- CSS [Link](https://www.cssmine.com/blog/2020-02-12-css-object-fit-and-object-position-properties-crop-images-embedded-in-html)