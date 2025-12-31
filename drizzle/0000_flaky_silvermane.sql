CREATE SCHEMA "league";
--> statement-breakpoint
CREATE SCHEMA "rules";
--> statement-breakpoint
CREATE TABLE "league"."roaster" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"reroll_cost" integer,
	"apothecary" boolean
);
--> statement-breakpoint
CREATE TABLE "session" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"expire" timestamp with time zone DEFAULT now() NOT NULL,
	"user" uuid
);
--> statement-breakpoint
CREATE TABLE "user" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(256),
	"passphrase" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "rules"."roaster" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"reroll_cost" integer,
	"apothecary" boolean
);
--> statement-breakpoint
CREATE TABLE "rules"."skill" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" varchar,
	"name" varchar(50),
	"mandatory" boolean
);
