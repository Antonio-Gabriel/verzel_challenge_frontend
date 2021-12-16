import { ContentModules } from "../../components/ContentModules";
import { DashboardContent } from "../../components/DashboardContent";
import { HeaderDashboard } from "../../components/HeaderDashbord";

export function Modules() {
  return (
    <>
      <HeaderDashboard />
      <DashboardContent />
      <ContentModules />
    </>
  );
}
