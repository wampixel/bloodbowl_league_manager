CREATE TABLE "rules"."player" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(25),
	"roaster" uuid,
	"keywords" varchar(256),
	"cost" integer,
	"move" smallint,
	"strength" smallint,
	"agility" smallint,
	"passing" smallint,
	"armour" smallint,
	"primary" varchar(60),
	"secondary" varchar(60),
	CONSTRAINT "min_move" CHECK ("rules"."player"."move" >= 1),
	CONSTRAINT "max_move" CHECK ("rules"."player"."move" <= 9),
	CONSTRAINT "min_strength" CHECK ("rules"."player"."move" >= 1),
	CONSTRAINT "max_strength" CHECK ("rules"."player"."move" <= 8),
	CONSTRAINT "min_agility" CHECK ("rules"."player"."move" >= 1),
	CONSTRAINT "max_agility" CHECK ("rules"."player"."move" <= 6),
	CONSTRAINT "min_passing" CHECK ("rules"."player"."move" >= 1),
	CONSTRAINT "max_passing" CHECK ("rules"."player"."move" <= 6),
	CONSTRAINT "min_armour" CHECK ("rules"."player"."move" >= 3),
	CONSTRAINT "max_armour" CHECK ("rules"."player"."move" <= 11)
);
--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "player_roaster_roaster_uid_fk" FOREIGN KEY ("roaster") REFERENCES "rules"."roaster"("uid") ON DELETE no action ON UPDATE no action;