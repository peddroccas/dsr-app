import type { ReactNode } from 'react'
import { Card as UICard, CardHeader, CardTitle, CardContent } from './ui/card'

interface CardProps {
  key: string
  title: string
  children?: ReactNode
}
export default function Card({ key, children, title }: CardProps) {
  return (
    <UICard
      key={key}
      className="hover:scale-105 transition-transform duration-300 cursor-pointer shadow-black rounded-lg overflow-hidden font-roboto"
    >
      <CardHeader className="bg-ignara p-4 text-slate-50">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-2">{children}</CardContent>
    </UICard>
  )
}
