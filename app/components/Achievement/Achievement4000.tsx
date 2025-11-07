"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

type WorkItem = {
  id: number;
  number: string;
  prefecture: string;
  dateLabel: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
};

const workItems: WorkItem[] = [
  {
    id: 0,
    number: "01",
    prefecture: "埼玉県",
    dateLabel: "2023.03.31 設置",
    title: "埼玉県熊谷市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/sku-8b%E2%91%A0-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/1010/",
  },
  {
    id: 1,
    number: "02",
    prefecture: "埼玉県",
    dateLabel: "2023.03.31 設置",
    title: "埼玉県熊谷市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/sku-2b%E2%91%A1-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/1002/",
  },
  {
    id: 2,
    number: "03",
    prefecture: "群馬県",
    dateLabel: "2023.01.12 設置",
    title: "群馬県邑楽郡千代田町太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/gcy-5a%E2%91%A0-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/989/",
  },
  {
    id: 3,
    number: "04",
    prefecture: "群馬県",
    dateLabel: "2022.10.31 設置",
    title: "群馬県邑楽郡邑楽町太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/gou-1a%E2%91%A2-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/992/",
  },
  {
    id: 4,
    number: "05",
    prefecture: "千葉県",
    dateLabel: "2022.10.31 設置",
    title: "千葉県野田市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/cn-17a2.jpg",
    href: "https://winfieldjapan-solarpower.com/works/985/",
  },
  {
    id: 5,
    number: "06",
    prefecture: "埼玉県",
    dateLabel: "2022.03.31 設置",
    title: "埼玉県熊谷市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/sku-8b%E2%91%A0-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/1006/",
  },
  {
    id: 6,
    number: "07",
    prefecture: "埼玉県",
    dateLabel: "2022.03.24 設置",
    title: "埼玉県鶴ヶ島市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/cn-17a2.jpg",
    href: "https://winfieldjapan-solarpower.com/works/997/",
  },
  {
    id: 7,
    number: "08",
    prefecture: "茨城県",
    dateLabel: "2019.11.01 設置",
    title: "茨城県桜川市太陽光発電所",
    subtitle: "Solar power generation",
    imageUrl:
      "https://winfieldjapan-solarpower.com/wp/wp-content/uploads/2023/09/gou-1a%E2%91%A2-1.jpg",
    href: "https://winfieldjapan-solarpower.com/works/393/",
  },
];

export default function Achievement4000() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(3);
  const [offsets, setOffsets] = useState<number[]>([]);

  const registerSlideRef = (element: HTMLElement | null, index: number) => {
    slideRefs.current[index] = element;
  };

  // Measure slide left offsets for precise translateX control
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!viewport || slides.length === 0) return;

    const baseLeft = slides[0].offsetLeft;
    const list = slides.map((s) => s.offsetLeft - baseLeft);
    setOffsets(list);

    const onResize = () => {
      const base = slides[0].offsetLeft;
      setOffsets(slides.map((s) => s.offsetLeft - base));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToIndex = (nextIndex: number) => {
    if (!trackRef.current || offsets.length === 0) return;
    const safeIndex = (nextIndex + workItems.length) % workItems.length;
    const x = offsets[safeIndex] ?? 0;
    trackRef.current.style.transform = `translateX(-${x}px)`;
    setActiveIndex(safeIndex);
  };

  const handlePrev = () => {
    const nextIndex = (activeIndex - 1 + workItems.length) % workItems.length;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % workItems.length;
    scrollToIndex(nextIndex);
  };

  const activeItem = useMemo(() => workItems[activeIndex], [activeIndex]);

  return (
    <section className="bg-[#f3f1e8] min-h-screen py-16 md:py-24">
      <div className="px-20 ">
        <div className="mb-5 flex items-end">
          <p className="text-xl font-semibold text-emerald-900 md:text-[67px]">
            Works
          </p>
          <p className="text-sm text-emerald-900 pl-4 pb-3 text-[20px] font-bold">
            開発実績
          </p>
        </div>
        <div className="mx-auto flex w-full items-stretch gap-12 md:flex-row md:gap-16 ml-4">
          <div className="md:w-[300px] lg:w-[340px] self-stretch">
            <div className="flex h-full flex-col">
              <div className="flex flex-1 flex-col justify-between space-y-8 ml-4">
                <div>
                  <p
                    key={activeItem.number}
                    className="text-10xl  tracking-tight text-emerald-900 md:text-[144px] transition-opacity duration-300"
                  >
                    {activeItem.number}
                  </p>
                  <div className="mt-3 space-y-1">
                    <p
                      key={activeItem.prefecture}
                      className="text-base font-medium text-emerald-900 md:text-lg transition-opacity duration-300"
                    >
                      {activeItem.prefecture}
                    </p>
                    <p
                      key={activeItem.dateLabel}
                      className="text-sm text-emerald-900/70 md:text-base transition-opacity duration-300"
                    >
                      {activeItem.dateLabel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-18 w-18 items-center justify-center rounded-full bg-white font-semibold text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                    aria-label="前へ"
                  >
                    <span className="text-xl">&lt;</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-18 w-18 items-center justify-center rounded-full bg-white font-semibold text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                    aria-label="次へ"
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <div
              ref={viewportRef}
              className="overflow-hidden pb-4 pr-4 md:pr-6"
            >
              <div
                ref={trackRef}
                className="flex gap-10 transition-transform duration-500 ease-out"
                style={{ willChange: "transform" }}
              >
                {workItems.map((work, index) => (
                  <article
                    key={work.id}
                    ref={(element) => registerSlideRef(element, index)}
                    className="group relative min-w-[320px] max-w-[360px] overflow-hidden rounded-[10px] shadow-[0_14px_40px_rgba(0,0,0,0.08)] md:min-w-[392px] md:max-w-[392px]"
                  >
                    <Link href={work.href} className="block" target="_blank">
                      <div className="relative aspect-[9/14] w-full">
                        <Image
                          src={work.imageUrl}
                          alt={work.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 320px, 392px"
                          priority={index === 0}
                          unoptimized
                        />
                        <div className="absolute inset-0 rounded-3xl">
                          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                          <div className="absolute left-8 right-5 top-8 z-10 flex items-center gap-3 text-[14px] font-semibold tracking-widest text-white/90 ">
                            <span>{work.number}</span>
                            <span>{work.prefecture}</span>
                            <span>{work.dateLabel}</span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 left-3">
                            <h3 className="text-white drop-shadow-sm text-[23px] font-bold ">
                              {work.title}
                            </h3>
                            <p className="mt-1 text-sm text-white/80">
                              {work.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="self-end text-right mt-8">
          <Link
            href="/works"
            className="relative inline-flex items-center gap-3 rounded-full bg-emerald-900 px-20 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 md:px-20 md:py-5 md:text-base"
          >
            <span>
            More
            </span>
            <svg
              className="h-8 w-8 text-white absolute right-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 10h8m0 0-3-3m3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
