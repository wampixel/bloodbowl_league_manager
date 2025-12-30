CREATE TABLE "roaster" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"coach" varchar,
	"win" integer,
	"loss" integer,
	"year" integer
);
--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "max_reroll" integer;--> statement-breakpoint
ALTER TABLE "team" ADD COLUMN "reroll_cost" integer;--> statement-breakpoint
ALTER TABLE "team" DROP COLUMN "player";--> statement-breakpoint
ALTER TABLE "team" DROP COLUMN "win";--> statement-breakpoint
ALTER TABLE "team" DROP COLUMN "loss";--> statement-breakpoint
ALTER TABLE "team" DROP COLUMN "year";