import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";

type CommonProps = {
  children: ReactNode;
  icon?: IconName;
  variant?: "primary" | "secondary" | "light" | "dark";
  className?: string;
};

type CTAButtonProps =
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never });

const variants = {
  primary: "bg-[var(--green)] text-white shadow-[0_16px_34px_rgba(23,59,47,0.22)] hover:bg-[var(--green-soft)]",
  secondary:
    "border border-[var(--gold)] bg-white text-[var(--green)] shadow-[0_12px_28px_rgba(23,33,28,0.07)] hover:bg-[var(--cream)]",
  light: "bg-white text-[var(--green)] shadow-[0_12px_28px_rgba(23,33,28,0.1)] hover:bg-[var(--sand)]",
  dark: "bg-[var(--foreground)] text-white shadow-[0_16px_34px_rgba(23,33,28,0.22)] hover:bg-[var(--green)]",
};

export default function CTAButton(props: CTAButtonProps) {
  const { children, icon, variant = "primary", className = "" } = props;
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, children: _children, icon: _icon, variant: _variant, className: _className, ...anchorProps } = props;

    return (
      <a {...anchorProps} className={classes} href={href}>
        {icon ? <Icon name={icon} /> : null}
        <span>{children}</span>
      </a>
    );
  }

  const buttonProps = props as CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
  const {
    children: _children,
    icon: _icon,
    variant: _variant,
    className: _className,
    ...nativeButtonProps
  } = buttonProps;

  return (
    <button {...nativeButtonProps} className={classes} type={buttonProps.type ?? "button"}>
      {icon ? <Icon name={icon} /> : null}
      <span>{children}</span>
    </button>
  );
}
