import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/resume"

import { SectionHeading } from "./SectionHeading"

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      {projects.map((p) => (
        <Card key={p.name} className="mt-6">
          <CardHeader>
            <CardTitle className="text-base text-[#1a365d] sm:text-lg">
              {p.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-1 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed sm:text-base">
              {p.items.map((b) => (
                <li key={b} className="pl-0.5 marker:text-[#1a365d]">
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
