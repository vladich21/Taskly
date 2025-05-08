interface Props {
  className?: string;
}

export const FolderIcon = ({ className }: Props) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 20 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.79556 15C1.2837 15 0.856667 14.835 0.514444 14.505C0.172222 14.175 0.000740741 13.7629 0 13.2686V1.73143C0 1.23786 0.171482 0.826071 0.514444 0.496071C0.857407 0.166071 1.28407 0.000714286 1.79444 0H7.32889L9.55111 2.14286H18.2056C18.7167 2.14286 19.1437 2.30821 19.4867 2.63893C19.8296 2.96964 20.0007 3.38143 20 3.87429V13.2696C20 13.7625 19.8289 14.1743 19.4867 14.505C19.1444 14.8357 18.7174 15.0007 18.2056 15H1.79556Z"
      fill="currentColor"
    />
  </svg>
);
