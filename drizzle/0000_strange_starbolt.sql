CREATE SCHEMA "league";
--> statement-breakpoint
CREATE SCHEMA "rules";
--> statement-breakpoint
CREATE TABLE "league"."team" (
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
CREATE TABLE "rules"."player" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(30),
	"roster" uuid,
	"keywords" varchar(256),
	"quantity" integer,
	"cost" integer,
	"move" smallint,
	"strength" smallint,
	"agility" smallint,
	"passing" smallint,
	"armour" smallint,
	"primary" varchar(60),
	"secondary" varchar(60),
	CONSTRAINT "max_quantity" CHECK ("rules"."player"."quantity" <= 16),
	CONSTRAINT "min_move" CHECK ("rules"."player"."move" >= 1),
	CONSTRAINT "max_move" CHECK ("rules"."player"."move" <= 9),
	CONSTRAINT "min_strength" CHECK ("rules"."player"."strength" >= 1),
	CONSTRAINT "max_strength" CHECK ("rules"."player"."strength" <= 8),
	CONSTRAINT "min_agility" CHECK ("rules"."player"."agility" >= 1),
	CONSTRAINT "max_agility" CHECK ("rules"."player"."agility" <= 6),
	CONSTRAINT "min_passing" CHECK ("rules"."player"."passing" >= 0),
	CONSTRAINT "max_passing" CHECK ("rules"."player"."passing" <= 6),
	CONSTRAINT "min_armour" CHECK ("rules"."player"."armour" >= 3),
	CONSTRAINT "max_armour" CHECK ("rules"."player"."armour" <= 11)
);
--> statement-breakpoint
CREATE TABLE "rules"."playerToSkill" (
	"player" uuid NOT NULL,
	"skill" uuid NOT NULL,
	"display" varchar(30),
	CONSTRAINT "playerToSkill_player_skill_pk" PRIMARY KEY("player","skill")
);
--> statement-breakpoint
CREATE TABLE "rules"."roster" (
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
--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "player_roster_roster_uid_fk" FOREIGN KEY ("roster") REFERENCES "rules"."roster"("uid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rules"."playerToSkill" ADD CONSTRAINT "playerToSkill_player_player_uid_fk" FOREIGN KEY ("player") REFERENCES "rules"."player"("uid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rules"."playerToSkill" ADD CONSTRAINT "playerToSkill_skill_skill_uid_fk" FOREIGN KEY ("skill") REFERENCES "rules"."skill"("uid") ON DELETE no action ON UPDATE no action;