export type DashboardBreadcrumbSegment = {
  label: string
  /** Omit for non-link segments (e.g. section labels without a route) */
  href?: string
}

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") return "/"
  return pathname.replace(/\/+$/, "") || "/"
}

/**
 * Breadcrumb trail for each dashboard route. Last segment is always the current page (no href).
 */
const ROUTE_BREADCRUMBS: Record<string, DashboardBreadcrumbSegment[]> = {
  "/": [{ label: "Dashboard" }],
  "/agents": [
    { label: "Dashboard", href: "/" },
    { label: "Agents" },
  ],
  "/knowledge": [
    { label: "Dashboard", href: "/" },
    { label: "Build" },
    { label: "Knowledge" },
  ],
  "/tools": [
    { label: "Dashboard", href: "/" },
    { label: "Build" },
    { label: "Tools" },
  ],
  "/behaviour": [
    { label: "Dashboard", href: "/" },
    { label: "Build" },
    { label: "Behavior" },
  ],
  "/playground": [
    { label: "Dashboard", href: "/" },
    { label: "Test" },
    { label: "Playground" },
  ],
  "/logs": [
    { label: "Dashboard", href: "/" },
    { label: "Observe" },
    { label: "Logs" },
  ],
  "/analytics": [
    { label: "Dashboard", href: "/" },
    { label: "Observe" },
    { label: "Analytics" },
  ],
  "/settings": [
    { label: "Dashboard", href: "/" },
    { label: "System" },
    { label: "Settings" },
  ],
  "/marketplace": [
    { label: "Dashboard", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Browse" },
  ],
  "/marketplace/integrations": [
    { label: "Dashboard", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Integrations" },
  ],
  "/marketplace/apps": [
    { label: "Dashboard", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Partner apps" },
  ],
}

export function getDashboardBreadcrumbs(
  pathname: string
): DashboardBreadcrumbSegment[] {
  const path = normalizePathname(pathname)
  return (
    ROUTE_BREADCRUMBS[path] ?? [
      { label: "Dashboard", href: "/" },
      { label: "Not found" },
    ]
  )
}
