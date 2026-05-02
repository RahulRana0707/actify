import { Geist_Mono, Figtree } from "next/font/google"

import "@actify/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@actify/ui/lib/utils"

import { Toaster } from "@actify/ui/components/sonner"
import { TooltipProvider } from "@actify/ui/components/tooltip"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
