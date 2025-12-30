ALTER TABLE "session" ALTER COLUMN "expires" SET DATA TYPE "undefined"."cal::local_datetime";--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "expires" SET NOT NULL;