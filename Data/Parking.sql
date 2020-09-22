-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Parking_bay" (
    "bay_id" integer   NOT NULL,
    "area_id" integer   NOT NULL,
    "lat" float   NOT NULL,
    "lon" float   NOT NULL,
    CONSTRAINT "pk_Parking_bay" PRIMARY KEY (
        "bay_id"
     )
);

CREATE TABLE "Parking_duration" (
    "arrival_time" date   NOT NULL,
    "departure_time" date   NOT NULL,
    "duration_minutes" integer   NOT NULL,
    "bay_id" integer   NOT NULL
);

CREATE TABLE "Area" (
    "area_id" integer   NOT NULL,
    "area_name" varchar(50)   NOT NULL,
    CONSTRAINT "pk_Area" PRIMARY KEY (
        "area_id"
     )
);

ALTER TABLE "Parking_bay" ADD CONSTRAINT "fk_Parking_bay_area_id" FOREIGN KEY("area_id")
REFERENCES "Area" ("area_id");

ALTER TABLE "Parking_duration" ADD CONSTRAINT "fk_Parking_duration_bay_id" FOREIGN KEY("bay_id")
REFERENCES "Parking_bay" ("bay_id");

