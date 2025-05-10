import logoSvg from "@shared/assets/icons/lending/logo.svg";

export const Logo = () => {
  return (
    <div className="header__logo">
      <img width="80" height="80" src={logoSvg} alt="Taskly logo" />
    </div>
  );
};
