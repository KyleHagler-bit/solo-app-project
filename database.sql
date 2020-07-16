--Database created is titled: solo_app

--CREATE tables needed (total of 4)
CREATE TABLE "user" ( --handles user information and allows for login after registration
	"id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) not null,
    "last_name" VARCHAR (80) not null,
    "email" VARCHAR (320) UNIQUE NOT NULL, --64 chars for local part, +@+255 for domain
    "password" VARCHAR (1000) NOT NULL,
    "date_created" DATE DEFAULT NOW(), --set default to today's date
    "birthday" DATE,
    "profile_pic" VARCHAR,
    "last_login" DATE
);

CREATE TABLE "entry" ( --this holds all entries and in theory only show your specific entries
	"id" SERIAL PRIMARY KEY,
	"user_id" INT  NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
	"emotion_value" INT,
	"note" VARCHAR(8000),
	"date_logged" DATE DEFAULT NOW()
);

CREATE TABLE "entry_activity" ( --this is a sort of join table between an entry and all the icons chosen for it
	"id" SERIAL PRIMARY KEY,
	"entry_id" INT NOT NULL REFERENCES "entry"("id") ON DELETE CASCADE,
	"activity_id" INT REFERENCES "activity_library"("id") ON DELETE CASCADE
);

CREATE TABLE "activity_library" ( --this has the list of icons to choose from on question 2
	"id" SERIAL PRIMARY KEY,
	"activity_name" VARCHAR(255),
	"activity_icon" VARCHAR(255)
);

----------------------------------------
--INSERT mock data OTHERWISE register new account yourself to start journaling
INSERT INTO "user" ("first_name","last_name","email","password","date_created","birthday","profile_pic","last_login")
VALUES ('First', 'Last', 'mockemail@yahoo.com', 'journal', '07/02/20', '11/11/95','https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg','07/02/20');

--INSERT mock data
INSERT INTO "entry" ("user_id","emotion_value","note","date_logged")
VALUES (1,5,'This is my very first entry','07/02/20'),
(1,6,'This is my very first entry','07/03/20'),
(1,2,'This is my very first entry','07/04/20'),
(1,1,'This is my very first entry','07/05/20'),
(2,3,'no note','07/04/20');

--INSERT mock data
INSERT INTO "entry_activity" ("entry_id","activity_id")
VALUES (2,2),(2,6),(2,11),(3,2),(3,3),(4,11),(5,2),(5,11);

--NEEDED in order to get icons to appear to user on icons page
INSERT INTO "activity_library"  ("activity_name", "activity_icon")
VALUES 
('chores','fa fa-trash'), --1
('date','fa fa-heart'),
('exercise','fa fa-bicycle'),
('family','fa fa-home'),
('friends','fa fa-users'), --5
('gaming','fa fa-gamepad'),
('health','fa fa-medkit'),
('movies/tv','fa fa-television'),
('reading','fa fa-book'),
('relax','fa fa-bed'), --10
('school','fa fa-graduation-cap'),
('shopping','fa fa-shopping-cart'),
('sports','fa fa-futbol-o'),
('travel','fa fa-globe'),
('work','fa fa-briefcase'); --15




