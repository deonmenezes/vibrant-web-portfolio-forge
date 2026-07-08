import * as React from "react"

import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-none border-[3px] border-black dark:border-yellow-400 bg-background px-4 py-3 text-base font-medium shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#facc15] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:translate-x-[-2px] focus-visible:translate-y-[-2px] focus-visible:shadow-[6px_6px_0px_0px_#000] dark:focus-visible:shadow-[6px_6px_0px_0px_#facc15] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
