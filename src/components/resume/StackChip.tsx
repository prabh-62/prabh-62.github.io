import { Badge } from "@/components/ui/badge"
import { companyShort, type Company, type StackTool } from "@/data/stack"

type StackChipProps = {
  tool: StackTool
  /** Show the small "where" tags (used in the Skills overview, hidden inside a job). */
  showCompanies?: boolean
}

export function StackChip({ tool, showCompanies = false }: StackChipProps) {
  const Icon = tool.icon
  return (
    <Badge variant="secondary" className="h-auto gap-1.5 px-2.5 py-1 text-xs">
      {Icon && (
        <Icon
          aria-hidden
          className="size-3.5 shrink-0"
          style={tool.color ? { color: tool.color } : undefined}
        />
      )}
      <span>{tool.name}</span>
      {showCompanies && (
        <span className="text-muted-foreground ml-0.5 text-[0.65rem] font-normal">
          · {tool.at.map((c: Company) => companyShort[c]).join(", ")}
        </span>
      )}
    </Badge>
  )
}
