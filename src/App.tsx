import { ArrowUpRight, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { community } from "@/data/spotlight"
import {
  type ExperienceBullet,
  type ProductCallout,
  education,
  experience,
  profile,
  projects,
  skills,
  summary,
} from "@/data/resume"
import { cn } from "@/lib/utils"

const heading =
  "text-sm font-semibold tracking-[0.2em] text-[#1a365d] uppercase"
const linkClass = "text-[#3182ce] hover:underline"

function ExperienceBulletLine({ bullet }: { bullet: ExperienceBullet }) {
  if (typeof bullet === "string") {
    return bullet
  }
  return (
    <>
      {bullet.before}
      <a
        className={linkClass}
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

function ExperienceProductCallout({
  product,
  className,
}: {
  product: ProductCallout
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-xl rounded-md border border-border/70 bg-muted/10 p-3 sm:p-3.5",
        product.imageSrc &&
          !product.gallery &&
          "flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4",
        className
      )}
    >
      {product.gallery ? (
        <div className="w-full min-w-0 space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">
              {product.title}
            </h4>
            {product.description ? (
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                {product.description}
              </p>
            ) : null}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="m-0 min-w-0 space-y-1.5">
              <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
                {product.gallery.before.label}
              </figcaption>
              <video
                className="bg-background w-full max-w-full rounded-md border border-border/80"
                controls
                playsInline
                preload="metadata"
                aria-label={product.gallery.before.alt}
              >
                <source src={product.gallery.before.src} type="video/mp4" />
              </video>
            </figure>
            <figure className="m-0 min-w-0 space-y-1.5">
              <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
                {product.gallery.after.label}
              </figcaption>
              <video
                className="bg-background w-full max-w-full rounded-md border border-border/80"
                controls
                playsInline
                loop
                muted
                preload="metadata"
                aria-label={product.gallery.after.alt}
              >
                <source src={product.gallery.after.src} type="video/mp4" />
              </video>
            </figure>
          </div>
          <figure className="m-0 min-w-0 space-y-1.5">
            <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
              {product.gallery.mobile.label}
            </figcaption>
            <img
              src={product.gallery.mobile.src}
              alt={product.gallery.mobile.alt}
              className="bg-background max-h-56 w-auto max-w-full rounded-md border border-border/80 object-contain object-top"
              loading="lazy"
              decoding="async"
            />
          </figure>
          {product.links && product.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
              {product.links.map((l) => (
                <li key={l.href}>
                  <a
                    className={cn(
                      "inline-flex items-center gap-0.5",
                      linkClass
                    )}
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="size-3 opacity-80"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : product.imageSrc ? (
        <>
          {product.links && product.links[0] ? (
            <a
              className="focus-visible:ring-ring block w-fit max-w-full shrink-0 rounded-md border border-border/80 bg-background/80 shadow-sm focus-visible:ring-2"
              href={product.links[0].href}
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-24 w-40 overflow-hidden sm:h-[7.25rem] sm:w-44">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt ?? ""}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </a>
          ) : (
            <div className="h-24 w-40 shrink-0 overflow-hidden rounded-md border border-border/80 sm:h-[7.25rem] sm:w-44">
              <img
                src={product.imageSrc}
                alt={product.imageAlt ?? ""}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">
              {product.title}
            </h4>
            {product.description ? (
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                {product.description}
              </p>
            ) : null}
            {product.links && product.links.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
                {product.links.map((l) => (
                  <li key={l.href}>
                    <a
                      className={cn(
                        "inline-flex items-center gap-0.5",
                        linkClass
                      )}
                      href={l.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {l.label}
                      <ArrowUpRight
                        className="size-3 opacity-80"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <div>
          <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">
            {product.title}
          </h4>
          {product.description ? (
            <p className="text-foreground/90 mt-1 text-xs leading-relaxed sm:text-sm">
              {product.description}
            </p>
          ) : null}
          {product.links && product.links.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-x-2.5 gap-y-1 text-xs sm:text-sm">
              {product.links.map((l) => (
                <li key={l.href}>
                  <a
                    className={cn(
                      "inline-flex items-center gap-0.5",
                      linkClass
                    )}
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        <header className="text-center sm:text-left">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-[#1a365d] sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-balance text-base text-[#3182ce] sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 text-left text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-x-2 sm:gap-y-2">
            <a
              className={cn(
                "inline-flex min-w-0 items-center gap-2 sm:shrink",
                linkClass
              )}
              href={profile.linkedinHref}
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="size-4 shrink-0 text-[#3182ce]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>{profile.linkedinLabel}</span>
            </a>
            <a
              className={cn(
                "inline-flex min-w-0 items-center gap-2 sm:shrink",
                linkClass
              )}
              href={profile.githubHref}
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="size-4 shrink-0 text-[#3182ce]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>{profile.githubLabel}</span>
            </a>
            <div className="inline-flex min-w-0 items-center gap-2 text-foreground sm:shrink-0">
              <MapPin
                className="size-4 shrink-0 text-red-600"
                aria-hidden
              />
              <span>{profile.location}</span>
            </div>
          </div>
        </header>

        <Separator className="my-4" />

        <section aria-labelledby="summary-heading">
          <h2 className={heading} id="summary-heading">
            Summary
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed sm:text-lg">
            {summary}
          </p>
        </section>

        <Separator className="my-4" />

        <section aria-labelledby="skills-heading">
          <h2 className={heading} id="skills-heading">
            Skills
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="px-2.5 py-1 text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-4" />

        <section aria-labelledby="experience-heading">
          <h2 className={heading} id="experience-heading">
            Experience
          </h2>
          <ol className="mt-6 w-full list-none p-0 sm:mt-7">
            {experience.map((job, index) => {
              const where = job.where.replace(" - ", " · ")
              const isLast = index === experience.length - 1
              return (
                <li
                  key={`${job.company}-${job.dates}`}
                  className="group relative m-0 pb-8 pl-0 last:pb-0 sm:pb-9"
                >
                  <div className="flex flex-col sm:flex-row sm:gap-2 sm:pt-0">
                    <div className="shrink-0 sm:w-[6.75rem] sm:pt-1 sm:text-right md:w-28">
                      <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                        {job.dates}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:mt-1 sm:text-[0.7rem] md:text-xs">
                        {where}
                      </p>
                    </div>
                    <div className="relative mt-3 flex min-w-0 flex-1 flex-row gap-0 sm:mt-0 sm:min-h-0 sm:items-stretch sm:gap-2">
                      <div
                        className="relative z-0 hidden w-2 shrink-0 self-stretch flex-col sm:flex"
                        aria-hidden
                      >
                        <div
                          className="relative z-10 mx-auto mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-background bg-[#1a365d] ring-1 ring-border"
                        />
                        {!isLast && (
                          <div className="bg-border absolute top-[14px] bottom-0 left-1/2 w-px -translate-x-1/2" />
                        )}
                      </div>
                      <div
                        className="min-w-0 flex-1 sm:border-0"
                      >
                        <div className="relative min-w-0 border-l-2 border-border/90 pl-4 sm:border-0 sm:pl-0">
                          <div
                            className="bg-[#1a365d] ring-background absolute top-1.5 left-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-2 sm:hidden"
                            aria-hidden
                          />
                          <h3 className="m-0 text-base font-semibold text-[#1a365d] sm:text-lg">
                            {job.title}
                          </h3>
                          <p className="m-0 mt-1 text-sm font-medium text-[#3182ce] leading-snug">
                            {job.company}
                          </p>
                          <ul className="m-0 mt-3 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed sm:text-base">
                            {job.items.map((b, bulletIndex) => (
                              <li
                                key={`${job.company}-${job.dates}-${bulletIndex}`}
                                className="marker:text-[#1a365d] marker:font-normal pl-0.5"
                              >
                                <ExperienceBulletLine bullet={b} />
                              </li>
                            ))}
                          </ul>
                          {"product" in job && job.product && (
                            <ExperienceProductCallout
                              product={job.product}
                              className="mt-4"
                            />
                          )}
                          {"secondaryProduct" in job &&
                            job.secondaryProduct && (
                              <ExperienceProductCallout
                                product={job.secondaryProduct}
                                className="mt-3"
                              />
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <Separator className="my-4" />

        <section aria-labelledby="projects-heading">
          <h2 className={heading} id="projects-heading">
            Projects
          </h2>
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

        <Separator className="my-4" />

        <section aria-labelledby="community-heading">
          <h2 className={heading} id="community-heading">
            Community
          </h2>
          <Card className="mt-4 w-full max-w-md overflow-hidden text-left shadow-sm sm:mt-5">
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              <a
                href={community.mlh.href}
                rel="noreferrer"
                target="_blank"
                className="focus-visible:ring-ring relative block h-28 w-full shrink-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none sm:h-auto sm:w-36 sm:min-h-[7.5rem]"
              >
                <img
                  src={community.mlh.imageSrc}
                  alt={community.mlh.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3 sm:py-3 sm:pr-4 sm:pl-3">
                <CardTitle className="text-sm font-semibold text-[#1a365d] leading-snug">
                  {community.mlh.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-1.5 line-clamp-3 text-xs leading-relaxed">
                  {community.mlh.description}
                </CardDescription>
                <a
                  className={cn(
                    "mt-2 inline-flex w-fit items-center gap-0.5 text-xs font-medium",
                    linkClass
                  )}
                  href={community.mlh.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read on MLH Stories
                  <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
                </a>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-4" />

        <section aria-labelledby="education-heading">
          <h2 className={heading} id="education-heading">
            Education
          </h2>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base text-[#1a365d] sm:text-lg">
                <a
                  className={cn("inline font-semibold", linkClass)}
                  href={education.programPageHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {education.program}
                  <ArrowUpRight
                    className="ml-0.5 inline size-3.5 align-[-0.125em] opacity-80"
                    aria-hidden
                  />
                </a>
                <span className="text-[#1a365d]"> · {education.school}</span>
              </CardTitle>
              <CardDescription className="text-[#3182ce]">
                {education.where} · {education.dates}
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

      </div>
    </div>
  )
}
