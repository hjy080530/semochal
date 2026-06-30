import TeamContent from "@/components/team/TeamContent";
import { TEAMS } from "@/lib/mockData";

export default function TeamPage() {
  return <TeamContent teams={TEAMS} />;
}
