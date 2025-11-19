import { PropsWithChildren } from "react";

export const FooterLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
