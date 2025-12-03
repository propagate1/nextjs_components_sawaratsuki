import Image from 'next/image';
import { Kosugi_Maru } from 'next/font/google';

const kosugiMaru = Kosugi_Maru({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Service4010() {
  return (
    <section className={`py-8 md:py-16 px-4 bg-white overflow-x-hidden ${kosugiMaru.className}`}>
      <div className="flex justify-center items-center">
        {/* PC版: スケール調整 / SP版: フルサイズ */}
        <div className="w-full max-w-[400px] md:max-w-none md:scale-[1] lg:scale-100 md:origin-center">
          {/* メインカード */}
          <div className="relative bg-white rounded-2xl border-4 border-[#FFB84D] shadow-xl overflow-visible w-full md:w-[980px]">
            {/* メインコンテンツ */}
            <div className="px-4 py-5 pb-4">
              {/* オレンジのヘッダーバッジ - 枠の中 */}
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="bg-[#FFB84D] text-white px-8 md:px-[72px] py-1 rounded-full font-bold text-base md:text-lg shadow-md">
                  ミライルは
                </div>
              </div>

              {/* タイトル */}
              <div className="text-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
                  新型コロナウイルス感染症の
                </h2>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                  <span className="text-gray-800">拡大防止対策を</span>
                  <span className="text-[#FFB84D]">徹底</span>
                  <span className="text-gray-800">しています！</span>
                </h2>
              </div>

              {/* 緑のバー - SP版は小さく */}
              <div className="bg-[#7EC944] text-white text-center py-2 pb-3 mb-3 md:mb-4 font-bold text-lg md:text-5xl w-fit align-center px-3 md:px-5 mx-auto">
                すべてのスタッフの毎朝の検温
              </div>

              {/* サブテキスト */}
              <p className="text-center text-gray-700 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                体温を表示したネームプレートの装着を行い<br />
                37.4度以上でお客様宅にお伺いすることはございません！
              </p>

              {/* クリーム色の背景エリア */}
              <div className="bg-[#FFF8E8] rounded-2xl p-4 md:p-8 md:pl-[120px] relative">
                {/* 左側の円形バッジ - SP版では上部中央に配置 */}
                <div className="md:absolute md:left-5 md:top-8 w-16 h-16 md:w-24 md:h-24 bg-[#7EC944] rounded-full flex items-center justify-center text-white font-bold text-center text-xs md:text-sm leading-tight shadow-lg z-10 mx-auto mb-4 md:mb-0 md:mx-0">
                  <div>
                    そのほか<br />にも
                  </div>
                </div>

                {/* チェックリスト - SP版は1列、PC版は2列 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-4 md:mb-6 md:ml-5">
                  {/* SP版: 全項目を1列で表示 */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">約1時間おきの<span className="text-[#7EC944] font-bold">アルコール消毒</span></span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">お見舞時の<span className="text-[#7EC944] font-bold">マスク２枚</span>つけ</span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">室内は常時の<span className="text-[#7EC944] font-bold">換気</span></span>
                    </div>
                  </div>

                  {/* PC版: 右列 / SP版: 続き */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">全スタッフの<span className="text-[#7EC944] font-bold">外出自粛</span></span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">お客様との<span className="text-[#7EC944] font-bold">ソーシャルディスタンス</span></span>
                    </div>
                  </div>
                </div>

                {/* フッターメッセージ */}
                <div className="text-center mt-4 md:mt-6 relative z-10">
                  <p className="text-gray-700 font-medium text-base md:text-xl">
                    上記対策を徹底しておりますので<br className="md:hidden" /><span className="text-[#FFB84D] font-bold text-[110%] md:text-[120%]">安心してご利用ください！</span>
                  </p>
                </div>
              </div>

              {/* 右下のマスク画像 - SP版では小さく */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 w-24 md:w-48 h-auto pointer-events-none">
                <Image
                  src="/img/Service4010_Background_1.png"
                  alt="マスク"
                  width={200}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

