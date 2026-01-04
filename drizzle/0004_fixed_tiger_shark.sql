ALTER TABLE "rules"."player" DROP CONSTRAINT "min_strength";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "max_strength";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "min_agility";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "max_agility";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "min_passing";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "max_passing";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "min_armour";--> statement-breakpoint
ALTER TABLE "rules"."player" DROP CONSTRAINT "max_armour";--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "min_strength" CHECK ("rules"."player"."strength" >= 1);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "max_strength" CHECK ("rules"."player"."strength" <= 8);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "min_agility" CHECK ("rules"."player"."agility" >= 1);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "max_agility" CHECK ("rules"."player"."agility" <= 6);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "min_passing" CHECK ("rules"."player"."passing" >= 1);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "max_passing" CHECK ("rules"."player"."passing" <= 6);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "min_armour" CHECK ("rules"."player"."armour" >= 3);--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "max_armour" CHECK ("rules"."player"."armour" <= 11);