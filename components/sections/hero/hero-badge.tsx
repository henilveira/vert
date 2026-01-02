import { Badge } from "@shadcn/badge";

interface HeroBadgeProps {
  text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="mb-6 border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
    >
      {text}
    </Badge>
  );
}
