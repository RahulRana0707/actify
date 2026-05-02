export function DashboardPagePlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Placeholder content for this page. Replace with real UI when ready.
      </p>
    </div>
  )
}
