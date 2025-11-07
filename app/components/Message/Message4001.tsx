import Image from "next/image";
import type { ReactNode } from "react";

const paragraphs: ReactNode[] = [
  (
    <>
      私たちは、病気や障がいを負っても、住み慣れた地域で最期まで生活ができるように、地域の皆さまを支援していくことをモットーに、精進しております。施設では
      <span className="font-extrabold text-[#69BB00]">
        24時間対応可能な訪問診療、小児から高齢者まであらゆる健康問題に対応する診療所、骨折や脳卒中後の在宅復帰やその後のリハビリ、また認知症や重度の障がいを負った方への介護、がんや老衰患者さんの看取りケアが可能な介護老人保健施設（入所・通所）、介護が必要な方を支援するケアマネージャー・ヘルパーの事業所
      </span>
      を運営しています。
      さまざまな専門スタッフが協力して皆さまのお役に立てるよう頑張りますので、ご指導、ご鞭撻のほどよろしくお願いします。,
    </>
  ),
];

export default function Message4001() {
  return (
    <section className="bg-gradient-to-b from-white via-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-end gap-0" aria-hidden="true">
            <svg
              className="h-5 w-5 -translate-y-1 transform text-[#c7e7a6]"
              viewBox="0 0 60 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 6c-1 0-2 .5-2.6 1.4L5.8 48c-1.4 2.1.2 4.4 2.6 4.4h43.2c2.4 0 4-2.3 2.6-4.4L32.6 7.4C32 6.5 31 6 30 6Z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="h-6 w-6 text-[#6fbe1c]"
              viewBox="0 0 60 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 5c-1.1 0-2.2.5-2.9 1.6L5 47.8c-1.7 2.7.3 5.7 3 5.7h44c2.7 0 4.7-3 3-5.7L32.9 6.6C32.2 5.5 31.1 5 30 5Z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="h-5 w-5 -translate-y-1 transform text-[#c7e7a6]"
              viewBox="0 0 60 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 6c-1 0-2 .5-2.6 1.4L5.8 48c-1.4 2.1.2 4.4 2.6 4.4h43.2c2.4 0 4-2.3 2.6-4.4L32.6 7.4C32 6.5 31 6 30 6Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-[40px] font-extrabold tracking-wide sm:text-[40px] text-[#504434]">
            管理者・センター長のご挨拶
          </h2>
        </div>

        <div className="mt-0 flex items-center gap-6 rounded-[32px] bg-white/95 p-6 flex-row sm:justify-center sm:gap-8 sm:p-6 md:gap-10 md:p-8 lg:gap-14 lg:pb-12">
          <div className="w-full sm:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ">
              <Image
                src="/img/Message4001_Thumbnail_1.jpg"
                alt="利用者と笑顔で向き合うスタッフ"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                priority
              />
            </div>
          </div>

          <div className="w-full space-y-6 text-left sm:w-1/2">
            <h3 className="text-xl font-extrabold leading-relaxed text-[#69BB00] sm:text-[24px]">
              住み慣れた地域で最期まで
              <br className="hidden sm:block" />
              誰も取り残さない支援の輪を
            </h3>
            <div className="space-y-5 text-base leading-8 text-[#504434] font-bold">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="pt-2 text-sm font-medium text-slate-500 md:text-right">
              管理者・センター長　横田修一
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
