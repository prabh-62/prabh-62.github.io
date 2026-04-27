import { ArrowUpRight } from "lucide-react"

import { type ProductCallout } from "@/data/resume"
import { cn } from "@/lib/utils"

type ExperienceProductCalloutProps = {
  product: ProductCallout
  className?: string
}

export function ExperienceProductCallout({
  product,
  className,
}: ExperienceProductCalloutProps) {
  return (
    <div
      className={cn(
        "max-w-xl rounded-md border border-border/70 bg-muted/10 p-3 sm:p-3.5",
        product.imageSrc && !product.gallery
          ? "flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4"
          : undefined,
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
                      "text-[#3182ce] hover:underline"
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
                        "text-[#3182ce] hover:underline"
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
                      "text-[#3182ce] hover:underline"
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
