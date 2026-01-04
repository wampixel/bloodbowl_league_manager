ALTER TABLE "rules"."player" ADD COLUMN "quantity" integer;--> statement-breakpoint
ALTER TABLE "rules"."player" ADD CONSTRAINT "max_quantity" CHECK ("rules"."player"."quantity" <= 16);