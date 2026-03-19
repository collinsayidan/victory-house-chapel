'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    if (onClick) {
      onClick(event);
    }

    const overlay = document.getElementById('site-transition-overlay');
    const bar = document.getElementById('site-transition-bar');

    if (overlay) {
      overlay.style.pointerEvents = 'auto';
      overlay.style.transform = 'translateY(0%)';
    }

    if (bar) {
      bar.style.transform = 'scaleX(1)';
    }

    setTimeout(() => {
      router.push(href);
    }, 420);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}