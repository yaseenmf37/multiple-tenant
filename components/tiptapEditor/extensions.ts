import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyle, Color } from "@tiptap/extension-text-style"
import Highlight from "@tiptap/extension-highlight"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"
import { Table } from "@tiptap/extension-table"
import { TableRow } from "@tiptap/extension-table-row"
import { TableCell } from "@tiptap/extension-table-cell"
import { TableHeader } from "@tiptap/extension-table-header"
import Youtube from "@tiptap/extension-youtube"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import CharacterCount from "@tiptap/extension-character-count"
import Typography from "@tiptap/extension-typography"

import { common, createLowlight } from "lowlight"

const lowlight = createLowlight(common)

export const editorExtensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5, 6],
    },
    link: {
      openOnClick: false,
      autolink: true,
      HTMLAttributes: {
        class: "text-blue-600 underline underline-offset-2",
        rel: "noopener noreferrer",
        target: "_blank",
      },
    },
  }),
  Placeholder.configure({
    placeholder: ({ node }) =>
      node.type.name === "heading"
        ? "What's the title?"
        : "Start writing your blog post…",
  }),
  Image.configure({
    inline: false,
    allowBase64: true,
    HTMLAttributes: { class: "rounded-lg max-w-full h-auto my-4" },
  }),
  Youtube.configure({
    controls: true,
    nocookie: true,
    HTMLAttributes: { class: "rounded-lg my-4 w-full aspect-video" },
  }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
  Subscript,
  Superscript,
  TaskList,
  TaskItem.configure({ nested: true }),
  Table.configure({ resizable: true }),
  TableRow,
  TableHeader,
  TableCell,
  CodeBlockLowlight.configure({ lowlight }),
  CharacterCount,
  Typography,
]
