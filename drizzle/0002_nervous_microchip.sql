CREATE TABLE "rules"."playerToSkill" (
	"player" uuid NOT NULL,
	"skill" uuid NOT NULL,
	CONSTRAINT "playerToSkill_player_skill_pk" PRIMARY KEY("player","skill")
);
--> statement-breakpoint
ALTER TABLE "rules"."playerToSkill" ADD CONSTRAINT "playerToSkill_player_player_uid_fk" FOREIGN KEY ("player") REFERENCES "rules"."player"("uid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rules"."playerToSkill" ADD CONSTRAINT "playerToSkill_skill_skill_uid_fk" FOREIGN KEY ("skill") REFERENCES "rules"."skill"("uid") ON DELETE no action ON UPDATE no action;