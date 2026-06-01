/** Brand mark — shared by the navbar and footer (was duplicated in both). */
export function Logo() {
  return (
    <svg
      className="mark"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#0d9488" />
      <rect x="10" y="10" width="20" height="20" rx="6" fill="#115e59" />
      <rect x="14.5" y="14.5" width="11" height="11" rx="3.2" fill="#9fe5db" />
    </svg>
  );
}
