"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

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
  const [offsets, setOffsets] = useState<number[]>([]);

  // total originals
  const N = workItems.length;
  type Slide = { item: WorkItem; key: string };
  // extended slide list for infinite loop
  const extendedSlides: Slide[] = useMemo(() => {
    const pre = workItems.map((item, i) => ({ item, key: `pre-${i}` }));
    const main = workItems.map((item, i) => ({ item, key: `main-${i}` }));
    const post = workItems.map((item, i) => ({ item, key: `post-${i}` }));
    return [...pre, ...main, ...post];
  }, []);
  const baseIndex = N; // first original slide position in extended list
  const [currentIndex, setCurrentIndex] = useState<number>(baseIndex);

  const registerSlideRef = (element: HTMLElement | null, index: number) => {
    slideRefs.current[index] = element;
  };

  // Measure slide offsets for precise translate control (relative to first)
  useLayoutEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length === 0) return;
    const baseLeft = slides[0].offsetLeft;
    setOffsets(slides.map((s) => s.offsetLeft - baseLeft));
    const onResize = () => {
      const base = slides[0]?.offsetLeft ?? 0;
      setOffsets(slides.map((s) => s.offsetLeft - base));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [extendedSlides.length]);

  // helper: apply transform with optional animation
  const applyTransform = useCallback(
    (index: number, animate: boolean) => {
      const track = trackRef.current;
      if (!track || offsets.length === 0) return;
      track.style.transition = animate ? "transform 500ms ease-out" : "none";
      const x = offsets[index] ?? 0;
      track.style.transform = `translateX(-${x}px)`;
    },
    [offsets]
  );

  // initial position -> baseIndex (first original)
  useEffect(() => {
    if (offsets.length === 0) return;
    setCurrentIndex(baseIndex);
    applyTransform(baseIndex, false);
  }, [offsets, baseIndex, applyTransform]);

  const goTo = (next: number) => {
    if (offsets.length === 0) return;
    setCurrentIndex(next);
    applyTransform(next, true);
  };

  const handlePrev = () => {
    goTo(currentIndex - 1);
  };

  const handleNext = () => {
    goTo(currentIndex + 1);
  };

  // after animation: if out of original bounds, jump back seamlessly
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onEnd = () => {
      const lastOriginalIndex = baseIndex + N - 1;
      if (currentIndex > lastOriginalIndex) {
        const mapped = currentIndex - N;
        setCurrentIndex(mapped);
        applyTransform(mapped, false);
      } else if (currentIndex < baseIndex) {
        const mapped = currentIndex + N;
        setCurrentIndex(mapped);
        applyTransform(mapped, false);
      }
    };
    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [currentIndex, N, baseIndex, applyTransform]);

  const activeItem = useMemo(() => {
    const normalized = ((currentIndex - baseIndex) % N + N) % N;
    return workItems[normalized];
  }, [currentIndex, N, baseIndex]);

  return (
    <section className="bg-[#f3f1e8] min-h-screen py-16 md:py-24">
  <div className="px-6 md:px-8 lg:px-20">
        <div className="mb-5 md:flex items-end">
          <p className="text-[30px] font-semibold text-emerald-900 md:text-[67px]">Works</p>
          <p className="md:pl-4 pb-3 sm:text-[10px] md:text-[20px] font-bold text-emerald-900">開発実績</p>
        </div>

  <div className="mx-auto flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <div className="order-2 w-full self-stretch lg:order-1 lg:w-[340px]">
            <div className="flex h-full flex-col">
              <div className="flex flex-1 flex-col justify-between space-y-2 lg:space-y-8">
                <div className="flex items-end gap-4 md:block">
                  <p
                    key={activeItem.number}
                    className="text-6xl tracking-tight text-emerald-900 transition-opacity duration-300 md:text-[60px] lg:text-[144px]"
                  >
                    {activeItem.number}
                  </p>
                  <div className="flex flex-col md:mt-3 md:space-y-1">
                    <p
                      key={activeItem.prefecture}
                      className="text-base font-medium text-emerald-900 transition-opacity duration-300 md:text-lg"
                    >
                      {activeItem.prefecture}
                    </p>
                    <p
                      key={activeItem.dateLabel}
                      className="text-xs text-emerald-900/70 transition-opacity duration-300 md:text-base"
                    >
                      {activeItem.dateLabel}
                    </p>
                  </div>
                </div>
                {/* PCのみ: 左カラム内のナビ */}
                <div className="lg:mt-4 hidden items-center gap-4 pb-2 md:pb-4 lg:flex">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                    aria-label="前へ"
                  >
                    <span className="text-xl">&lt;</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                    aria-label="次へ"
                  >
                    <span className="text-xl">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* SP専用 (<640px): ボタン左、その下に中央配置More */}
          <div className="order-3 mt-4 lg:hidden sm:hidden">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                aria-label="前へ"
              >
                <span className="text-xl">&lt;</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                aria-label="次へ"
              >
                <span className="text-xl">&gt;</span>
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href="/works"
                className="relative inline-flex items-center gap-3 rounded-full bg-emerald-900 px-10 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                <span>More</span>
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M5 10h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          {/* sm / md (>=640px <1024px): 既存の横並び (ナビ左 / More右) */}
          <div className="order-3 mt-4 hidden items-center justify-between sm:flex lg:hidden">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                aria-label="前へ"
              >
                <span className="text-xl">&lt;</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/30 bg-white text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
                aria-label="次へ"
              >
                <span className="text-xl">&gt;</span>
              </button>
            </div>
            <Link
              href="/works"
              className="relative inline-flex items-center gap-3 rounded-full bg-emerald-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 md:px-12 md:py-4"
            >
              <span>More</span>
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5 10h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right slider */}
          <div className="order-1 flex min-w-0 flex-1 flex-col gap-8 lg:order-2">
            <div ref={viewportRef} className="overflow-hidden pb-2 md:pb-4 md:pr-4 lg:pr-6">
              <div ref={trackRef} className="flex gap-10" style={{ willChange: "transform" }}>
                {extendedSlides.map((slide, index) => (
                  <article
                    key={slide.key}
                    ref={(el) => registerSlideRef(el, index)}
                    className="group relative min-w-[88vw] max-w-[88vw] overflow-hidden rounded-[10px] shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:min-w-[88vw] sm:max-w-[88vw] md:min-w-[360px] md:max-w-[360px] lg:min-w-[392px] lg:max-w-[392px]"
                  >
                    <Link href={slide.item.href} className="block" target="_blank">
                      <div className="relative aspect-[9/14] w-full">
                        <Image
                          src={slide.item.imageUrl}
                          alt={slide.item.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 360px, 392px"
                          priority={false}
                          unoptimized
                        />
                        <div className="absolute inset-0 rounded-3xl">
                          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                          <div className="absolute left-5 right-5 top-4 z-10 flex items-center gap-3 text-[10px] font-semibold tracking-widest text-white/90 md:text-xs">
                            <span>{slide.item.number}</span>
                            <span>{slide.item.prefecture}</span>
                            <span>{slide.item.dateLabel}</span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                            <h3 className="text-white drop-shadow-sm">{slide.item.title}</h3>
                            <p className="mt-1 text-sm text-white/80">{slide.item.subtitle}</p>
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

        {/* PC専用: 従来の右下Moreボタン */}
        <div className="mt-8 hidden text-right lg:block">
          <Link
            href="/works"
            className="relative inline-flex items-center gap-3 rounded-full bg-emerald-900 px-20 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 md:px-20 md:py-5 md:text-base"
          >
            <span>More</span>
            <svg
              className="absolute right-5 h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 10h8m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
