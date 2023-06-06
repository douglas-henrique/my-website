"use client"
import { CopyBlock, dracula } from "react-code-blocks";

interface CodeProps {
  text: string
  language: string
}
export default function CodeBlock({ text, language }: CodeProps) {
  return <CopyBlock
    text={text}
    language={language.toLocaleLowerCase()}
    showLineNumbers={true}
    wrapLines
    theme={dracula}
  />
}