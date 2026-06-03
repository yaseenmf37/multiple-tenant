"use client"

import { HTMLElements, HTMLMotionProps, motion } from "framer-motion"
import { ComponentType } from "react"

type MotionElementProps<T extends keyof HTMLElements> = {
  elementType?: T
} & HTMLMotionProps<T>

const MotionElement = <T extends keyof HTMLElements = "div">({
  elementType,
  ...props
}: MotionElementProps<T>) => {
  const Tag = (elementType || "div") as keyof HTMLElements

  const Component = motion[Tag] as ComponentType<HTMLMotionProps<T>>

  if (!Component) return null

  return <Component {...(props as HTMLMotionProps<T>)} />
}

export default MotionElement
