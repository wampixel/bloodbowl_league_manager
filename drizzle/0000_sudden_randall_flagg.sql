CREATE TABLE "session" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"expires" integer,
	"user" uuid
);
--> statement-breakpoint
CREATE TABLE "team" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"player" varchar,
	"win" integer,
	"loss" integer,
	"year" integer
);
--> statement-breakpoint
CREATE TABLE "user" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"last_name" varchar(256),
	"mail" varchar(256),
	"created_at" timestamp DEFAULT now()
);
