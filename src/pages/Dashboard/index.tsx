import { Cards } from "../../components/Cards";

import { HeaderDashboard } from "../../components/HeaderDashbord";
import { DashboardContent } from "../../components/DashboardContent";
import { AccordionsModules } from "../../components/AccordionsModules";

export function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <DashboardContent />
      <Cards />
      <AccordionsModules />
    </>
  );
}
