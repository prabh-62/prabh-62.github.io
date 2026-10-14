import { stackGroups } from "@/data/stack"

import { SectionHeading } from "./SectionHeading"
import { StackChip } from "./StackChip"

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="mt-4 space-y-3">
        {stackGroups.map((group) => (
          <div key={group.category}>
            <p className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase">
              {group.category}
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              {group.tools.map((tool) => (
                <StackChip key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
