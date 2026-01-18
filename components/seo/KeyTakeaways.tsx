import { type FC, type ReactNode } from 'react'
import { Check } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
  title?: string
}

export const KeyTakeaways: FC<KeyTakeawaysProps> = ({
  items,
  title = 'Key Takeaways',
}) => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 my-8">
      <h2 className="font-outfit font-semibold text-lg text-slate-900 mb-4">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
