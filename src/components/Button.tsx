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
    "inline-flex items-center justify-center px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors no-underline cursor-pointer pt-4";

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
