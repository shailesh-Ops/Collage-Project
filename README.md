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



# Devlopement plan

✅ Week 1
PHP setup
MySQL setup
Database connection

✅ Week 2
Register page
Login page
Sessions

✅ Week 3
Buyer dashboard
Seller dashboard
Admin dashboard

✅ Week 4
Aircraft CRUD (Create, Read, Update, Delete)

✅ Week 5
Search
Wishlist
Contact form
Final polishing

# main blue print of project 

                 AeroMarket
                      │
        ┌─────────────┴─────────────┐
        │                           │
     Frontend                  Backend (PHP)   | meet dev
        │                           │
 HTML • CSS • JS              PHP • MySQL
        │                           │
        └─────────────┬─────────────┘
                      │
                 User Database   | krish data engi



                 📍Current Progress
✅ Completed
Home Page
Login Page UI
Aircraft Listing Page
Aircraft Cards
Hero Section
Featured Aircraft
Categories
Partners
Video Section
Footer
Responsive Design

Project Status: 30% Complete


# final project structure 

AeroMarket/
│
├── index.php
├── login.php
├── register.php
├── contact.php
├── aircraft.php
├── aircraft-details.php
├── logout.php
│
├── buyer/
│   ├── dashboard.php
│   ├── profile.php
│   ├── wishlist.php
│   └── settings.php
│
├── seller/
│   ├── dashboard.php
│   ├── add-aircraft.php
│   ├── edit-aircraft.php
│   ├── my-aircraft.php
│   └── profile.php
│
├── admin/
│   ├── dashboard.php
│   ├── users.php
│   ├── sellers.php
│   ├── aircraft.php
│   ├── reports.php
│   └── settings.php
│
├── config/
│   ├── database.php
│   ├── auth.php
│   └── session.php
│
├── includes/
│   ├── header.php
│   ├── navbar.php
│   ├── footer.php
│   └── sidebar.php
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── LOGO/
│   └── air-video/
│
└── database/
    └── aeromarket.sql

# create this one to day and add file one project 
    AeroMarket/
│
├── index.php
├── login.php
├── register.php
├── contact.php
├── aircraft.php
├── aircraft-details.php
│
├── buyer/
├── seller/
├── admin/
│---------------------------- # work are not for to day on task so coming soon 
├── config/
│     └── database.php
│
├── includes/
│     ├── header.php
│     ├── navbar.php
│     └── footer.php
│
├── assets/
│
└── database/
      └── aeromarket.sql


# krish are make this all think's create and manage that 
      📌 Task 2 — Database Design

Before creating forms, we design the database.

Our first table will be:

users

Columns:

id
full_name
email
password
role
created_at

Role values:

Buyer
Seller
Admin

Simple.

Clean.

Scalable.

📌 Task 3 — Database Connection

We'll create

config/database.php

This file will contain only the database connection.

Every PHP page will reuse it.

Instead of writing:

mysqli_connect(...)

20 times,

we'll write it once and reuse it everywhere.

This is called code reusability, and it's something professors like to see.