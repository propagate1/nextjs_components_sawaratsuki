// app/page.tsx
import { main } from "framer-motion/client";
import News4003 from "./components/News/News4003";
import Price4003 from "./components/Price/Price4003";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Price4003 />
    </main>
  );
}
