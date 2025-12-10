import React from "react";
import {
  GrComplaintsReqLogo,
  GrSocietyManagementLogo,
  GrMarketingLogo,
  GrDashboardLogo,
  GrUserManagementLogo,
  GrNotificationLogo,
  GrReportAnalytics,
  GrEventAmenitiesLogo,
  GrAnnouncementsManageLogo,
} from "../assets/GradientSideBarLogo";
import {
  AnnouncementsManageLogo,
  ComplaintsReqLogo,
  DashboardLogo,
  EventAmenitiesLogo,
  MarketingLogo,
  NotificationLogo,
  ReportAnalytics,
  SocietyManagementLogo,
  UserManagementLogo,
} from "../assets/Icons";

const Sidebar = ({ activeLabel = "Dashboard" }) => {
  const sidebarItems = [
    {
      label: "Dashboard",
      defaultIcon: DashboardLogo,
      hoverIcon: GrDashboardLogo,
    },
    {
      label: "Society Management",
      defaultIcon: SocietyManagementLogo,
      hoverIcon: GrSocietyManagementLogo,
    },
    {
      label: "User Management",
      defaultIcon: UserManagementLogo,
      hoverIcon: GrUserManagementLogo,
    },
    {
      label: "Announcements Management",
      defaultIcon: AnnouncementsManageLogo,
      hoverIcon: GrAnnouncementsManageLogo,
    },
    {
      label: "Reports & Analytics",
      defaultIcon: ReportAnalytics,
      hoverIcon: GrReportAnalytics,
    },
    {
      label: "Events & Analytics",
      defaultIcon: EventAmenitiesLogo,
      hoverIcon: GrEventAmenitiesLogo,
    },
    {
      label: "Complaints & Requests",
      defaultIcon: ComplaintsReqLogo,
      hoverIcon: GrComplaintsReqLogo,
    },
    {
      label: "Marketplace & Jobs",
      defaultIcon: MarketingLogo,
      hoverIcon: GrMarketingLogo,
    },
    {
      label: "Ads Run",
      defaultIcon: MarketingLogo,
      hoverIcon: GrMarketingLogo,
    },
    { label: "Agency", defaultIcon: MarketingLogo, hoverIcon: GrMarketingLogo },
    {
      label: "Account Manage",
      defaultIcon: MarketingLogo,
      hoverIcon: GrMarketingLogo,
    },
    {
      label: "Notification",
      defaultIcon: NotificationLogo,
      hoverIcon: GrNotificationLogo,
    },
  ];

  return (
 <aside
      className="fixed left-0 top-[90px] z-10 flex h-[calc(100vh-90px)] w-80 flex-col overflow-y-auto bg-white"
      aria-label="Sidebar"
    >
      {/* User Info */}
      <div className="border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 text-sm font-semibold text-white">
            EF
          </div>
          <div>
            <div className="text-base font-semibold">John deo</div>
            <div className="text-sm text-gray-400">Admin</div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-2" role="navigation" aria-label="Main">
        {sidebarItems.map((item) => {
          const isActive = item.label === activeLabel;

          return (
            <button
              key={item.label}
              type="button"
              className={`group flex w-full items-center gap-2 px-4 py-3 text-left text-base font-semibold transition-colors ${
                isActive
                  ? "bg-sky-50 text-sky-700"
                  : "text-black hover:bg-[#F8F8F8]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Default (black) icon */}
              <span
                className={
                  isActive ? "hidden" : "block group-hover:hidden"
                }
              >
                <item.defaultIcon width={24} height={24} />
              </span>

              {/* Gradient icon (hover or active) */}
              <span
                className={
                  isActive ? "block" : "hidden group-hover:block"
                }
              >
                <item.hoverIcon width={24} height={24} />
              </span>

              {/* Label */}
              <span
                className={
                  isActive
                    ? "ml-0 bg-linear-to-r from-[#034175] to-[#37B7FE] font-semibold text-base bg-clip-text text-transparent transition-all duration-200"
                    : "ml-0 transition-all duration-200 group-hover:bg-linear-to-r font-normal text-base group-hover:bg-clip-text group-hover:text-transparent group-hover:from-[#034175] group-hover:to-[#37B7FE]"
                }
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
