import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export function HeroBadge({ children, className, ...props }: HeroBadgeProps) {
	return (
		<Badge className={cn("inline-flex items-center gap-3 rounded-full border border-blue-400/20 px-8 py-3 text-xl font-medium backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-blue-200/10 text-blue-300", className)} {...props}>
			<span className="relative flex h-3.5 w-3.5">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
				<span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-cyan-500" />
			</span>
			{children}
		</Badge>
	)
}
