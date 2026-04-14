import BounceCards from '@/components/BounceCards'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const images = [
  "/assets/tallinn-1.webp",
  "/assets/tallinn-2.webp",
  "/assets/tallinn-3.webp",
  "/assets/tallinn-4.webp",
  "/assets/tallinn-5.webp"
];

const transformStyles = [
  "rotate(5deg) translate(-270px)",
  "rotate(0deg) translate(-170px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(170px)",
  "rotate(-5deg) translate(270px)"
];


export default function Home() {
  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold text-center">Find out what's happening in <span className="text-highlight">Tallinn</span> today</h1>
      <section className="mt-24 flex flex-col items-center justify-center">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={650}
          containerHeight={250}
          animationDelay={.2}
          animationStagger={0.15}
          easeType="elastic.out(.6, 0.5)"
          transformStyles={transformStyles}
          enableHover
        />
      </section>
      <section className="mt-28 flex flex-col items-center justify-center">
        <Link href="/events" className="flex flex-row items-center justify-center gap-2 px-4 py-4 text-2xl font-bold border border-white rounded-4xl bg-black/10 backdrop-blur-xl">
          explore events
          <ArrowRight className="size-7 shrink-0" aria-hidden />
        </Link>
      </section>
    </div >
  );
}
