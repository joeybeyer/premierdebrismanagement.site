import { type FC } from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Schema } from './Schema'
import { generateBreadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premierdebrismanagement.site'

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const schemaItems = [
    { name: 'Home', url: SITE_URL },
    ...items.map((item) => ({
      name: item.name,
      url: `${SITE_URL}${item.href}`,
    })),
  ]

  return (
    <>
      <Schema data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-700 flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-slate-400" />
              {i === items.length - 1 ? (
                <span className="text-slate-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-slate-700"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
