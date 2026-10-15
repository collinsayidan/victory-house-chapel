import Link from 'next/link';

export const metadata = {
  title: 'Page not found'
};

export default function NotFound() {
  return (
    <div className="container-page section">
      <h1>Page not found</h1>
      <p className="mt-6">If you typed the web address, check it is correct.</p>
      <p className="mt-4">If you pasted the web address, check you copied the entire address.</p>
      <p className="mt-4">
        You can <Link href="/">go to the home page</Link> or <Link href="/contact">contact us</Link>{' '}
        if you need help.
      </p>
    </div>
  );
}
