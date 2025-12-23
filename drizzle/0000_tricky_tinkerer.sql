CREATE TABLE "team" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"player" varchar,
	"win" integer,
	"loss" integer
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"last_name" varchar
);
