import { useState } from "react";
import "../App.css";
import {
  AdditionLogo,
  MonthlyReportsIcon,
  ResidentsLogo,
  SearchLogo,
  SocitiesLogo,
  UpSideArrow,
} from "../assets/Icons";
import CustomDropdown from "../components/CustomDropdown";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SocietyImg from "../assets/SocietiesImg.png";
import { DashboardChart, MembersChart, RevenueChart } from "../components/Charts";


export default function EstateDashboard() {
  const [period, setPeriod] = useState("yearly");
  const [recentPeriod, setRecentPeriod] = useState("30days");

  // Analytics of Total Societies period dropdown
  const options = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  // Filter Recent Societies period dropdown
  const recentOptions = [
    { value: "7days", label: "Last 7 Days" },
    { value: "15days", label: "Last 15 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
  ];

  return (
    <div className="app-shell">
      {/* Main area */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        <div className="main-layout">
          <Sidebar />

          {/* Dashboard content */}
          <main className="main-content">
            <div className="section-header">
              <div>
                <h2 className="section-title">Dashboard</h2>
                <p className="section-subtitle">Lorem ipsum dolor</p>
              </div>

              <button className="btn-primary">
                <AdditionLogo />
                <span>Add New Society</span>
              </button>
            </div>

            {/* KPI Cards */}
            <div className="card-grid">
              <Card
                title="Total Societies"
                value="15"
                icons={SocitiesLogo}
                iconsBackgroundColor="#F179501A"
              />
              <Card
                title="Active Residents"
                value="12000"
                icons={ResidentsLogo}
                iconsBackgroundColor="#F1F1501A"
              />
              <Card
                title="Monthly Revenue"
                value="₹34,56,000"
                icons={MonthlyReportsIcon}
                iconsBackgroundColor="#50A9F11A"
              />
            </div>

            {/* Main dashboard lower area */}
            <div className="mt-6 flex gap-6">
              <div className="flex flex-col gap-6 flex-1">
                <div className="section-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      <div className="font-medium text-sm text-[#034175]">Total Societies</div>
                    </div>
                    <CustomDropdown
                      options={options}
                      value={period}
                      onChange={setPeriod}
                      placeholder="Choose period"
                    />
                  </div>

                  {/* Simple bar-chart mimic using CSS */}
                  <DashboardChart />
                </div>

                <div className="section-card">
                  {/* Recent societies list */}
                  <div className="section-header-border">
                    <h4 className="text-sm font-semibold">Recent Societies</h4>
                    <div className="flex items-center gap-2">
                      <div className="relative bg-[#EBEBEB66] rounded-md h-10">
                        <SearchLogo className="top-2" height={20} width={20} />
                        <input
                          placeholder="Search"
                          className="px-3 py-2 pl-8 border bg-[#F2F5F7] border-gray-200 rounded-md text-sm"
                        />
                      </div>
                      <CustomDropdown
                        options={recentOptions}
                        value={recentPeriod}
                        onChange={setRecentPeriod}
                        placeholder="Choose Period"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="recent-item">
                        <div className="recent-left">
                          <div className="recent-thumb">
                            <img
                              src={SocietyImg}
                              alt="Society Logo"
                              className="recent-thumb-img"
                            />
                          </div>
                          <div>
                            <div className="font-medium">Ahmedabad Opal-1</div>
                            <div className="text-xs text-gray-400">
                              Lorem ipsum dolor sit amet consectetur.
                            </div>
                          </div>
                        </div>
                        <button className="recent-view-btn">
                          <span>View</span>
                          <UpSideArrow />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column widgets */}
              <aside className="sidebar-widgets">
                <Widget>
                  <div className="widget-circle">
                    <MembersChart value={75} className="h-60"/>
                  </div>
                </Widget>
                
                <Widget>
                  <div className="widget-circle" >
                    <RevenueChart className={"h-72"} />
                  </div>
                </Widget>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icons, iconsBackgroundColor }) {
  return (
    <div className="card-root">
      {/* Left text section */}
      <div>
        <div className="card-label">{title}</div>
        <div className="card-value">{value}</div>
      </div>
      <div
        className="card-icon-wrapper"
        style={{ backgroundColor: iconsBackgroundColor }}
      >
        <img src={icons} alt={`${title} icon`} className="card-icon-img" />
      </div>
    </div>
  );
}

function Widget({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-100">
      <div className="text-sm font-medium mb-3">{title}</div>
      {children}
    </div>
  );
}
