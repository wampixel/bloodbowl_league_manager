ALTER TABLE "user" RENAME COLUMN "name" TO "username";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "passphrase" varchar;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "last_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "mail";