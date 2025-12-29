interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: never;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href, ...props }: ButtonProps | LinkProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-900 font-medium text-sm transition-colors no-underline cursor-pointer mt-4 [&>p]:m-0 [&>p]:p-0 [&>p]:text-inherit";

  if (href) {
    const {
      target = "_blank",
      rel = "noopener noreferrer",
      ...linkProps
    } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
