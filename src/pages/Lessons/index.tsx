import { ContentLessons } from "../../components/ContentLessons";
import { DashboardContent } from "../../components/DashboardContent";
import { HeaderDashboard } from "../../components/HeaderDashbord";

export function Lessons() {
  return (
    <>
      <HeaderDashboard />
      <DashboardContent />
      <ContentLessons />
    </>
  );
}
