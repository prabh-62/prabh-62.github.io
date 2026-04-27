import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/resume"

import { SectionHeading } from "./SectionHeading"

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge key={s} variant="secondary" className="px-2.5 py-1 text-xs">
            {s}
          </Badge>
        ))}
      </div>
    </section>
  )
}
