
type Sheet = {
  id: number; 
  question: string
  answer: string
  tags: string
  category: number
  lastAttempted?: Date
  userUsername: string
}

export default Sheet