import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ApostlesUpdate } from "@/components/home/ApostlesUpdate";
import { Events } from "@/components/home/Events";
import { FindChurch } from "@/components/home/FindChurch";
import { Generations } from "@/components/home/Generations";
import { GlobalImpact } from "@/components/home/GlobalImpact";
import { Hero } from "@/components/home/Hero";
import { Legacy } from "@/components/home/Legacy";
import { Mission } from "@/components/home/Mission";
import { NextSteps } from "@/components/home/NextSteps";
import { Prayer } from "@/components/home/Prayer";
import { StayConnected } from "@/components/home/StayConnected";
import { Testimonies } from "@/components/home/Testimonies";
import { Watch } from "@/components/home/Watch";

export default function HomePage() {
  return (
    <>
      <SiteHeader current="/" />
      <main id="main" tabIndex={-1}>
        <Hero />
        <NextSteps />
        <GlobalImpact />
        <Watch />
        <Legacy />
        <Mission />
        <Events />
        <ApostlesUpdate />
        <Testimonies />
        <Generations />
        <Prayer />
        <FindChurch />
        <StayConnected />
      </main>
      <SiteFooter />
    </>
  );
}
