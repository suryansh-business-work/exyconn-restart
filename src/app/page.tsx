import VideoBanner from "@/components/banner/VideoBanner";
import Image from "next/image";
import TypoDefaultLayout from "./TypoDefaultLayout";

export default function Home() {
  return (
    <main>
      <VideoBanner />
      <TypoDefaultLayout />
    </main>
  );
}
