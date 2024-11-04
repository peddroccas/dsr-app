export type user = {
  id: string
  name: string
  email: string
}

export type store = {
  id: string
  name: string
}

export type tasks = {
  id: string
  title: string
  weeklyFrequency: number
}

export type completion = {
  id: string
  image: string
  completedAt: Date
  status: 'PENDING' | 'APPROVED'
  taskId: string
}
