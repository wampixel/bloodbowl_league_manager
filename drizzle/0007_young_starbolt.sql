ALTER TABLE "rules"."player" DROP CONSTRAINT "min_passing";--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "min_passing" CHECK ("rules"."player"."passing" >= 0);