import React from 'react'
import { ParagraphProps } from '@/types'
import ReactMarkdown from 'react-markdown'

export function Paragraph({ content }: Readonly<ParagraphProps>) {
  return (
    <div className="prose  py-2 mx-auto text-center">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}