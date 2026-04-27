import { type ExperienceBullet } from "@/data/resume"

type ExperienceBulletLineProps = { bullet: ExperienceBullet }

export function ExperienceBulletLine({ bullet }: ExperienceBulletLineProps) {
  if (typeof bullet === "string") {
    return bullet
  }
  return (
    <>
      {bullet.before}
      <a
        className="text-[#3182ce] hover:underline"
        href={bullet.link.href}
        rel="noreferrer"
        target="_blank"
      >
        {bullet.link.label}
      </a>
      {bullet.after}
    </>
  )
}
