import { AppSidebar } from './components/app-sidebar'
import { Menu } from './components/menu'
import { ThemeProvider } from './components/theme-provider'
import { Toolbar } from './components/toolbar'
import { SidebarProvider } from './components/ui/sidebar'
import { Toaster } from './components/ui/sonner'
import { cn } from './lib/utils'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="deadlock-theme">
      <main className="h-screen overflow-hidden">
        <Menu />
        <SidebarProvider>
          <AppSidebar />
          <div className={cn('flex flex-col w-full h-full')}>
            <Toolbar />
            {children}
          </div>
        </SidebarProvider>
      </main>
      <Toaster />
    </ThemeProvider>
  )
}