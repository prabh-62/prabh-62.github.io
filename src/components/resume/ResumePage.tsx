import { Separator } from "@/components/ui/separator"

import { EducationSection } from "./EducationSection"
import { ExperienceSection } from "./ExperienceSection"
import { ProjectsSection } from "./ProjectsSection"
import { ResumeHeader } from "./ResumeHeader"
import { SkillsSection } from "./SkillsSection"
import { SummarySection } from "./SummarySection"

/**
 * Full resume view. For future multi-page nav (e.g. /interests), keep route-level
 * switching in `App` or a small router; this component stays the `/` main content.
 */
export function ResumePage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <ResumeHeader />

        <Separator className="my-4" />
        <SummarySection />

        <Separator className="my-4" />
        <SkillsSection />

        <Separator className="my-4" />
        <ExperienceSection />

        <Separator className="my-4" />
        <ProjectsSection />

        <Separator className="my-4" />
        <EducationSection />
      </div>
    </div>
  )
}
