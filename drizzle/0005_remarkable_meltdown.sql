CREATE TABLE "skill" (
	"uid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" varchar,
	"name" varchar(50),
	"content" text
);
--> statement-breakpoint
ALTER TABLE "roaster" ALTER COLUMN "coach" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "roaster" ADD COLUMN "roaster" uuid;--> statement-breakpoint
ALTER TABLE "roaster" ADD CONSTRAINT "roaster_coach_user_uid_fk" FOREIGN KEY ("coach") REFERENCES "public"."user"("uid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "roaster" ADD CONSTRAINT "roaster_roaster_team_uid_fk" FOREIGN KEY ("roaster") REFERENCES "public"."team"("uid") ON DELETE no action ON UPDATE no action;