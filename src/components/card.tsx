import type { ReactNode } from 'react'
import { Card as UICard, CardHeader, CardTitle, CardContent } from './ui/card'

interface CardProps {
  key: string
  title: ReactNode
  children?: ReactNode
  className?: string
  onClick?: () => void
}
export default function Card({
  key,
  children,
  title,
  className,
  onClick,
}: CardProps) {
  return (
    <UICard
      key={key}
      onClick={onClick}
      className={`${className} hover:scale-105 transition-transform duration-300 cursor-pointer shadow-black rounded-lg overflow-hidden font-roboto`}
    >
      <CardHeader className="bg-ignara p-4 text-slate-50">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-2 bg-slate-50">
        {children}
      </CardContent>
    </UICard>
  )
}
