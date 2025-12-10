import '../index.css'
import { LogoutLogo, NotificationLogo, SearchLogo } from "../assets/Icons";

const Header = () => {
  return (
    <header className="app-header">
      <div className="flex items-center gap-16">
        {/* Logo (keeps custom font) */}
        <div className="app-logo">
          <span className="text-[#37B7FE]">Estate</span>{" "}
          <span className="text-[#034175]">Facility</span>
        </div>

        {/* Search */}
        <div className="search-container">
          <div className="search-box left-16">
            <SearchLogo className="absolute left-2 top-2.5" />
            <input placeholder="Search..." className="search-input-lg" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="header-actions">
        {/* Notifications */}
        <button className="icon-button-square">
          <NotificationLogo />
        </button>

        {/* Logout */}
        <button className="btn-secondary">
          <LogoutLogo />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
