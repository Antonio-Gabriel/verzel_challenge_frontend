import { Cards } from "../../components/Cards";

import { HeaderDashboard } from "../../components/HeaderDashbord";
import { DashboardContent } from "../../components/DashboardContent";
import { TableLessons } from "../../components/TableLessons";

export function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <DashboardContent />
      <Cards />
      <TableLessons />
    </>
  );
}
