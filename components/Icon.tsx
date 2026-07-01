import type { ReactNode } from "react";

export type IconName = "faith" | "prayer" | "study" | "mission" | "donation" | "share" | "message";

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, ReactNode> = {
  faith: (
    <>
      <path d="M12 3v18" />
      <path d="M7 8h10" />
      <path d="M6 21h12" />
    </>
  ),
  prayer: (
    <>
      <path d="M8 11V6a2 2 0 0 1 4 0v5" />
      <path d="M12 11V5a2 2 0 0 1 4 0v8" />
      <path d="M16 13V8a2 2 0 0 1 4 0v6a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-2a2 2 0 0 1 4 0v1" />
    </>
  ),
  study: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
      <path d="M8 7h8" />
      <path d="M8 11h7" />
    </>
  ),
  mission: (
    <>
      <path d="M12 21s7-4.8 7-11a7 7 0 0 0-14 0c0 6.2 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  donation: (
    <>
      <path d="M12 21s-7-4.2-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.8-7 10-7 10z" />
      <path d="M12 8v8" />
      <path d="M9.5 11h5" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.7 10.7 6.6-4.4" />
      <path d="m8.7 13.3 6.6 4.4" />
    </>
  ),
  message: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 1 1 21 12z" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
