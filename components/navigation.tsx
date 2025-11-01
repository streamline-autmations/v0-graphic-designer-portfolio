"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-script text-2xl text-brand-deep-orange hover:text-brand-warm-red transition-colors"
        >
          Ameli van Zyl
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-brand-deep-orange relative",
                  pathname === link.href
                    ? "text-brand-deep-orange after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-brand-deep-orange"
                    : "text-ink",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
