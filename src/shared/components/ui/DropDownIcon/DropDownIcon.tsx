type DropDownIconProps = React.SVGProps<SVGSVGElement>;

const DropDownIcon = (props: DropDownIconProps) => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default DropDownIcon;
