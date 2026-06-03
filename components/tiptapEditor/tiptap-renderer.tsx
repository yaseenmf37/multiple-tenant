"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import { editorExtensions } from "./extensions"
import "./editor.css"

type Props = {
  content: string
  className?: string
}

export function TiptapRenderer({ content, className }: Props) {
  const editor = useEditor({
    extensions: editorExtensions,
    content,
    editable: false,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `tiptap prose prose-neutral dark:prose-invert max-w-none ${className ?? ""}`,
      },
    },
  })

  if (!editor) return null

  return <EditorContent editor={editor} />
}
