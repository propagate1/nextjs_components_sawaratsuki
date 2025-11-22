import Image from "next/image";
import { Kosugi_Maru, Noto_Serif_JP } from "next/font/google";

const kosugiMaru = Kosugi_Maru({ 
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({ 
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function MiddleCTA4012() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-orange-400 py-12 px-6 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="inline-flex flex-col gap-4">
          {/* 上部：完全予約制バッジ、メインテキスト、枕画像を水平配置 */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            {/* 完全予約制バッジ（左） */}
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 flex flex-col items-center justify-center shadow-lg border-2 sm:border-3 md:border-4 border-dashed border-orange-300">
                <div className="text-orange-500 font-bold text-[0.5rem] sm:text-xs md:text-sm leading-tight text-center">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg">完全</div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg">予約制</div>
                  <div className="text-[0.5rem] sm:text-xs md:text-sm mt-0.5">【不定休】</div>
                </div>
              </div>
            </div>

            {/* メインテキスト（中央） */}
            <div className="text-left px-1 sm:px-1.5 md:px-2 lg:px-4">
              <h2 className={`${kosugiMaru.className} text-white text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 leading-tight tracking-wide`}>
                オーダーメイド枕の無料体験実施中
              </h2>
              <div className={`${notoSerifJP.className} text-left text-white text-[0.6rem] sm:text-xs md:text-base lg:text-lg space-y-0.5 opacity-90`}>
                <p>実際に当店のオーダーメイド枕を体験してみてください。</p>
                <p>きっとミリ単位の違いに驚かれるはずです。お気軽にご相談ください。</p>
              </div>
            </div>

            {/* 枕画像（右） */}
            <div className="flex-shrink-0">
              <Image
                src="/img/MiddleCTA4012_Pillow_1.png"
                alt="オーダーメイド枕"
                width={280}
                height={280}
                className="w-28 h-auto sm:w-32 md:w-40 lg:w-50"
              />
            </div>
          </div>

          {/* 下部：ボタンエリア（完全予約制の左端から枕画像の右端まで） */}
          <div className="flex flex-row items-stretch gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* 電話予約ボタン */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-full h-full p-1 sm:p-1.5 md:p-2 shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="border-2 sm:border-[2.5px] md:border-[3px] border-dotted border-orange-300 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 lg:px-8 lg:py-3 w-full flex items-center justify-center h-full">
                  <div className="text-orange-500 text-center">
                    <div className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-bold mb-0.5 sm:mb-0.5 md:mb-1">ご予約はこちら</div>
                    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider">
                        06-6556-6557
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせボタン */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-full h-full p-1 sm:p-1.5 md:p-2 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center">
                <div className="border-2 sm:border-[2.5px] md:border-[3px] border-dotted border-orange-300 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 lg:px-8 lg:py-3 w-full flex items-center justify-center h-full">
                  <div className="text-[#ff9999] flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-[0.65rem] sm:text-xs md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
                      お問い合わせはこちらから
                    </span>
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

