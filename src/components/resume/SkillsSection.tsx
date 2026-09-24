import { type ComponentType } from "react"
import { SiDotnet, SiKubernetes, SiNewrelic, SiRabbitmq, SiRedis, SiTeamcity } from "react-icons/si"
import {
  TbBrandAngular,
  TbBrandAws,
  TbBrandAzure,
  TbBrandCSharp,
  TbBrandDocker,
  TbBrandReact,
  TbBrandTypescript,
  TbDatabase,
  TbSql,
} from "react-icons/tb"
import { VscAzureDevops } from "react-icons/vsc"

import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/data/resume"

import { SectionHeading } from "./SectionHeading"

const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  "C#": TbBrandCSharp,
  ".NET": SiDotnet,
  "EF Core": SiDotnet,
  TypeScript: TbBrandTypescript,
  React: TbBrandReact,
  Angular: TbBrandAngular,
  Azure: TbBrandAzure,
  AWS: TbBrandAws,
  Docker: TbBrandDocker,
  "Amazon EKS": SiKubernetes,
  Redis: SiRedis,
  CloudFront: TbBrandAws,
  MSSQL: TbDatabase,
  "SQL Profiler": TbSql,
  "Azure AI Search": TbBrandAzure,
  "Azure Application Insights": TbBrandAzure,
  "New Relic": SiNewrelic,
  TeamCity: SiTeamcity,
  "Azure DevOps": VscAzureDevops,
  "AWS SNS": TbBrandAws,
  "AWS SQS": TbBrandAws,
  RabbitMQ: SiRabbitmq,
  "AWS CDK": TbBrandAws,
}

function SkillIcon({ name }: { name: string }) {
  const Icon = skillIcons[name]
  if (!Icon) return null
  return <Icon data-icon="inline-start" className="text-muted-foreground" />
}

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="mt-4 space-y-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase">
              {group.category}
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              {group.items.map((item) =>
                typeof item === "string" ? (
                  <Badge key={item} variant="secondary" className="px-2.5 py-1 text-xs">
                    <SkillIcon name={item} />
                    {item}
                  </Badge>
                ) : (
                  <span key={item.label} className="inline-flex flex-wrap items-center gap-1.5">
                    <Badge variant="outline" className="px-2.5 py-1 text-xs font-semibold">
                      <SkillIcon name={item.label} />
                      {item.label}
                    </Badge>
                    {item.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="px-2.5 py-1 text-xs">
                        <SkillIcon name={tool} />
                        {tool}
                      </Badge>
                    ))}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
