import { experience } from "@/data/resume"

import { ExperienceItem } from "./ExperienceItem"
import { SectionHeading } from "./SectionHeading"

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <ol className="mt-6 w-full list-none p-0 sm:mt-7">
        {experience.map((job, index) => (
          <ExperienceItem
            key={`${job.company}-${job.dates}`}
            job={job}
            isLast={index === experience.length - 1}
          />
        ))}
      </ol>
    </section>
  )
}
