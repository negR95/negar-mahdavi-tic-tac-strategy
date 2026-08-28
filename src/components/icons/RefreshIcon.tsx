import type { SVGProps } from "react";

export function RefreshIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.2"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 7v5h-5" />
      <path d="M19 12a7 7 0 1 1-2.05-4.95L20 10" />
    </svg>
  );
}
