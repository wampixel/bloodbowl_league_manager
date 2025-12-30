ALTER TABLE "session" ADD COLUMN "expire" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "session" DROP COLUMN "expires";