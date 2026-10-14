import { type ComponentType } from "react"
import {
  SiAngular,
  SiClaude,
  SiCursor,
  SiCypress,
  SiDatadog,
  SiDocker,
  SiDotnet,
  SiElasticstack,
  SiKubernetes,
  SiNestjs,
  SiNewrelic,
  SiOctopusdeploy,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTeamcity,
  SiTerraform,
  SiTypescript,
} from "react-icons/si"
import {
  TbBrandAws,
  TbBrandAzure,
  TbBrandCSharp,
  TbBrandOpenai,
  TbBrandWindows,
  TbDatabase,
  TbLambda,
  TbMasksTheater,
  TbScan,
  TbSql,
  TbShieldLock,
} from "react-icons/tb"
import { VscAzureDevops } from "react-icons/vsc"

export type Company = "Condo Control" | "Transflo" | "Microdea"

export const companies: readonly Company[] = ["Condo Control", "Transflo", "Microdea"]

/** Short labels for the small "where" tags next to each tool. */
export const companyShort: Record<Company, string> = {
  "Condo Control": "Condo Control",
  Transflo: "Transflo",
  Microdea: "Microdea",
}

export type StackTool = {
  name: string
  icon?: ComponentType<{ className?: string; style?: React.CSSProperties }>
  /** Brand colour for the icon, so logos are recognisable at a glance. */
  color?: string
  at: readonly Company[]
}

export type StackGroup = { category: string; tools: readonly StackTool[] }

const AWS = "#FF9900"
const AZURE = "#0078D4"
const MS = "#512BD4"

export const stackGroups: readonly StackGroup[] = [
  {
    category: "Languages & Frameworks",
    tools: [
      {
        name: "C#",
        icon: TbBrandCSharp,
        color: "#68217A",
        at: ["Condo Control", "Transflo", "Microdea"],
      },
      {
        name: "ASP.NET Core",
        icon: SiDotnet,
        color: MS,
        at: ["Condo Control", "Transflo", "Microdea"],
      },
      { name: "ASP.NET MVC", icon: SiDotnet, color: MS, at: ["Condo Control"] },
      { name: "EF Core", icon: SiDotnet, color: MS, at: ["Condo Control", "Transflo", "Microdea"] },
      { name: "MediatR / CQRS", at: ["Condo Control"] },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        at: ["Condo Control", "Transflo", "Microdea"],
      },
      { name: "React", icon: SiReact, color: "#149ECA", at: ["Condo Control"] },
      { name: "shadcn/ui", icon: SiShadcnui, at: ["Condo Control"] },
      { name: "Angular", icon: SiAngular, color: "#DD0031", at: ["Transflo", "Microdea"] },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E", at: ["Condo Control"] },
    ],
  },
  {
    category: "Cloud & Hosting",
    tools: [
      { name: "Azure App Service", icon: TbBrandAzure, color: AZURE, at: ["Condo Control"] },
      { name: "Azure Functions", icon: TbBrandAzure, color: AZURE, at: ["Condo Control"] },
      { name: "Azure Blob Storage", icon: TbBrandAzure, color: AZURE, at: ["Condo Control"] },
      { name: "AWS App Runner", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      { name: "AWS Lambda", icon: TbLambda, color: AWS, at: ["Transflo"] },
      { name: "Amazon EKS", icon: SiKubernetes, color: "#326CE5", at: ["Transflo"] },
      { name: "Docker", icon: SiDocker, color: "#2496ED", at: ["Transflo"] },
      { name: "Amazon EC2 + ALB", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      { name: "CloudFront", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      { name: "Amazon S3", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      {
        name: "IIS / Windows Server",
        icon: TbBrandWindows,
        color: "#0078D4",
        at: ["Transflo", "Microdea"],
      },
    ],
  },
  {
    category: "Data",
    tools: [
      {
        name: "SQL Server",
        icon: TbDatabase,
        color: "#CC2927",
        at: ["Condo Control", "Transflo", "Microdea"],
      },
      { name: "Redis", icon: SiRedis, color: "#DC382D", at: ["Condo Control", "Transflo"] },
      { name: "IBM Db2", icon: TbDatabase, color: "#054ADA", at: ["Transflo"] },
      { name: "SQL Profiler", icon: TbSql, color: "#CC2927", at: ["Microdea"] },
    ],
  },
  {
    category: "AI & Search",
    tools: [
      { name: "Azure AI Search", icon: TbBrandAzure, color: AZURE, at: ["Condo Control"] },
      { name: "OpenAI on Microsoft Foundry", icon: TbBrandOpenai, at: ["Condo Control"] },
      { name: "RAG / Vector Search", at: ["Condo Control"] },
      { name: "Hyperscience OCR", icon: TbScan, at: ["Transflo"] },
    ],
  },
  {
    category: "AI-Assisted Engineering",
    tools: [
      { name: "Claude Code", icon: SiClaude, color: "#D97757", at: ["Condo Control"] },
      { name: "Cursor", icon: SiCursor, at: ["Condo Control"] },
      { name: "Agentic coding workflow", at: ["Condo Control"] },
    ],
  },
  {
    category: "Messaging & Events",
    tools: [
      { name: "Azure Event Grid", icon: TbBrandAzure, color: AZURE, at: ["Condo Control"] },
      { name: "NServiceBus", at: ["Condo Control"] },
      { name: "AWS SQS", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      { name: "AWS SNS", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
    ],
  },
  {
    category: "Observability",
    tools: [
      { name: "New Relic", icon: SiNewrelic, color: "#1CE783", at: ["Condo Control"] },
      { name: "Application Insights", icon: TbBrandAzure, color: AZURE, at: ["Microdea"] },
      { name: "Datadog", icon: SiDatadog, color: "#632CA6", at: ["Transflo"] },
      { name: "ELK Stack", icon: SiElasticstack, color: "#005571", at: ["Transflo"] },
    ],
  },
  {
    category: "CI/CD & IaC",
    tools: [
      { name: "TeamCity", icon: SiTeamcity, at: ["Condo Control"] },
      { name: "Octopus Deploy", icon: SiOctopusdeploy, color: "#2F93E0", at: ["Condo Control"] },
      { name: "Azure DevOps", icon: VscAzureDevops, color: AZURE, at: ["Transflo"] },
      { name: "AWS CDK", icon: TbBrandAws, color: AWS, at: ["Transflo"] },
      { name: "Terraform CDK", icon: SiTerraform, color: "#7B42BC", at: ["Transflo"] },
    ],
  },
  {
    category: "Testing & Security",
    tools: [
      { name: "Playwright", icon: TbMasksTheater, color: "#2EAD33", at: ["Condo Control"] },
      { name: "Cypress", icon: SiCypress, at: ["Transflo"] },
      { name: "axe (WCAG accessibility)", at: ["Condo Control"] },
      {
        name: "Entra ID Managed Identity",
        icon: TbShieldLock,
        color: AZURE,
        at: ["Condo Control"],
      },
      { name: "Single Sign-On", icon: TbShieldLock, at: ["Transflo"] },
    ],
  },
]

/** Map an experience entry's company string to a stack company key. */
export function companyKey(company: string): Company | undefined {
  return companies.find((c) => company.includes(c))
}

/** The handful of tools shown as logos under each job; the full list lives in Skills. */
const jobHighlights: Record<Company, readonly string[]> = {
  "Condo Control": [
    "ASP.NET Core",
    "React",
    "Azure Functions",
    "Azure AI Search",
    "OpenAI on Microsoft Foundry",
    "Claude Code",
    "Azure Event Grid",
    "SQL Server",
    "New Relic",
    "Octopus Deploy",
  ],
  Transflo: [
    "ASP.NET Core",
    "Angular",
    "AWS App Runner",
    "AWS Lambda",
    "Amazon EKS",
    "AWS SQS",
    "Redis",
    "Datadog",
    "AWS CDK",
  ],
  Microdea: [
    "ASP.NET Core",
    "Angular",
    "TypeScript",
    "SQL Server",
    "IIS / Windows Server",
    "Application Insights",
  ],
}

export function toolsAt(company: Company): StackTool[] {
  const names = jobHighlights[company]
  const all = stackGroups.flatMap((g) => g.tools)
  return names.flatMap((n) => all.filter((t) => t.name === n && t.at.includes(company)))
}
