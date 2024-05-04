export default function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.29 8.09 7.54 8.86.58.11.79-.25.79-.57v-1.87c-3.01-.55-4.58-1.74-4.58-3.29 0-1.95 1.57-3.54 3.54-3.54 1.85 0 3.35 1.38 3.51 3.13.03.23.23.41.47.41H19c.27 0 .52-.22.52-.49V12c0-5.52-4.48-10-10-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </svg>
  );
}
