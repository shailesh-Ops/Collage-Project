# Collage-Project
This specific Repo only for my Collage Project so this repo show case entire my all process and bug and error with learn   


# project structure view and that saw to where each folder are exist 

AeroMarket/
│
├── index.php                 ← Home Page
├── aircraft.php              ← Aircraft Listing
├── aircraft-details.php      ← Single Aircraft Details
├── categories.php            ← Categories
├── partners.php              ← Partners
├── contact.php               ← Contact Page
├── login.php                 ← Login Page
├── register.php              ← Registration Page
├── dashboard.php             ← User Dashboard
│
├── admin/
│   ├── dashboard.php
│   ├── manage-aircraft.php
│   ├── manage-users.php
│   ├── manage-categories.php
│   └── reports.php
│
├── seller/
│   ├── dashboard.php
│   ├── add-aircraft.php
│   ├── edit-aircraft.php
│   └── my-aircraft.php
│
├── buyer/
│   ├── dashboard.php
│   ├── saved-aircraft.php
│   └── inquiries.php
│
├── includes/
│   ├── header.php
│   ├── navbar.php
│   ├── footer.php
│   ├── db.php
│   └── auth.php
│
├── assets/
│   ├── css/
│   │   ├── home.css
│   │   ├── aircraft.css
│   │   ├── login.css
│   │   └── dashboard.css
│   │
│   ├── js/
│   │   ├── home.js
│   │   ├── aircraft.js
│   │   └── login.js
│   │
│   ├── images/
│   │
│   ├── videos/
│   │
│   └── logo/
│
├── uploads/
│   ├── aircraft-images/
│   └── user-profile/
│
└── database/
    └── aeromarket.sql


# Admin structure 

Admin
 ├── Manage Users
 ├── Approve Sellers
 ├── Manage Aircraft
 ├── Manage Categories
 └── View Reports

 # Seller

 Seller
 ├── Add Aircraft
 ├── Edit Aircraft
 ├── Upload Images
 ├── Manage Listings
 └── View Buyer Inquiries

 # Buyer

 Buyer
 ├── Browse Aircraft
 ├── View Details
 ├── Save Favorites
 ├── Contact Seller
 └── Send Inquiry

 # DataBase Table

 users
│
├── id
├── name
├── email
├── password
├── role
└── created_at

aircraft
│
├── id
├── seller_id
├── aircraft_name
├── manufacturer
├── year
├── price
├── range_nm
├── passengers
├── image
└── description

categories
│
├── id
├── category_name
└── description

inquiries
│
├── id
├── buyer_id
├── aircraft_id
├── message
└── created_at





