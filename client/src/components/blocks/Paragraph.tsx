import React from 'react'
import { ParagraphProps } from '@/types'
import ReactMarkdown from 'react-markdown'

export function Paragraph({ content }: Readonly<ParagraphProps>) {
  return (
    <div className="prose mx-auto text-center">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}