import ExploreContent from "@/components/explore/ExploreContent";
import { CONTESTS } from "@/lib/mockData";

export default function ExplorePage() {
  return <ExploreContent contests={CONTESTS} />;
}
