// Re-mounted on every navigation, so each page fades gently into place
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
