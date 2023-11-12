import { Inter } from 'next/font/google'
import './globals.css'
import TaskProvider from '@/components/TaskProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Task App",
  description: "SiteWeb to mangage tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}
