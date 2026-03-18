import { HomeContent } from "@/components/home-content";

export default function Home() {
  const dailyKey = new Date().toISOString().slice(0, 10);

  return <HomeContent dailyKey={dailyKey} />;
}
