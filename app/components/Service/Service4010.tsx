import Image from 'next/image';
import { Kosugi_Maru } from 'next/font/google';

const kosugiMaru = Kosugi_Maru({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Service4010() {
  return (
    <section className={`py-16 px-4 bg-white ${kosugiMaru.className}`}>
      <div className="flex justify-center items-center">
        <div className="scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-center">
          {/* メインカード */}
          <div className="relative bg-white rounded-2xl border-4 border-[#FFB84D] shadow-xl overflow-visible w-[980px]">
            {/* メインコンテンツ */}
            <div className="px-4 py-5 pb-4">
              {/* オレンジのヘッダーバッジ - 枠の中 */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#FFB84D] text-white px-18 py-1 rounded-full font-bold text-lg shadow-md">
                  ミライルは
                </div>
              </div>

              {/* タイトル */}
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  新型コロナウイルス感染症の
                </h2>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gray-800">拡大防止対策を</span>
                  <span className="text-[#FFB84D]">徹底</span>
                  <span className="text-gray-800">しています！</span>
                </h2>
              </div>

              {/* 緑のバー - より大きな文字、paddingなし */}
              <div className="bg-[#7EC944] text-white text-center py-2 pb-3 mb-4 font-bold text-5xl w-fit align-center px-5 mx-auto">
                すべてのスタッフの毎朝の検温
              </div>

              {/* サブテキスト - 大きめ */}
              <p className="text-center text-gray-700 text-lg mb-8 leading-relaxed">
                体温を表示したネームプレートの装着を行い<br />
                37.4度以上でお客様宅にお伺いすることはございません！
              </p>

              {/* クリーム色の背景エリア - その他徹底も含む */}
              <div className="bg-[#FFF8E8] rounded-2xl p-8 pl-30 relative">
                {/* 左側の円形バッジ - クリーム色の背景内 */}
                <div className="absolute left-5 top-8 w-24 h-24 bg-[#7EC944] rounded-full flex items-center justify-center text-white font-bold text-center text-sm leading-tight shadow-lg z-10">
                  <div>
                    そのほか<br />にも
                  </div>
                </div>

                {/* チェックリスト */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 ml-5">
                  {/* 左列 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-base">約1時間おきの<span className="text-[#7EC944] font-bold">アルコール消毒</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-base">お見舞時の<span className="text-[#7EC944] font-bold">マスク２枚</span>つけ</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-base">室内は常時の<span className="text-[#7EC944] font-bold">換気</span></span>
                    </div>
                  </div>

                  {/* 右列 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-base">全スタッフの<span className="text-[#7EC944] font-bold">外出自粛</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7EC944] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-base">お客様との<span className="text-[#7EC944] font-bold">ソーシャルディスタンス</span></span>
                    </div>
                  </div>
                </div>

                {/* フッターメッセージ */}
                <div className="text-center mt-6 relative z-10">
                  <p className="text-gray-700 font-medium text-xl">
                    上記対策を徹底しておりますので<span className="text-[#FFB84D] font-bold text-[120%]">安心してご利用ください！</span>
                  </p>
                </div>
              </div>

              {/* 右下のマスク画像 */}
              <div className="absolute -bottom-10 -right-10 w-48 h-auto pointer-events-none">
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

