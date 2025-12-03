import Image from "next/image";
import { Kosugi_Maru } from "next/font/google";

const kosugiMaru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
});

export default function Voice4011() {
  const voices = [
    {
      id: 1,
      category: "不動産業",
      title: "再契約率アップ",
      image: "/img/Voice4011_Person_1.png",
      content: (
        <>
          各社同じ部屋を紹介する不動産業として、他社との差別化が必要と常に考えておりました。
          <br />
          そんな中FCクラブを知り、入居者様へのサービス拡大のためにFCクラブの導入を決断しました。
          <span className="bg-[#FFFACD] px-1">
            同業他社との差別化ができたことで、契約満了後の引越しの幕も弊社を利用してくれるお客様が増えました
          </span>
          。
        </>
      ),
    },
    {
      id: 2,
      category: "葬儀会社",
      title: "顧客満足度アップと業務量の軽減",
      image: "/img/Voice4011_Person_2.png",
      content: (
        <>
          今まで自社で優待サービスを提供していましたが、各企業とのやりとりや管理が大変で膨大な時間がかかっていました。
          <br />
          FCクラブを導入したことで
          <span className="bg-[#FFFACD] px-1">
            前よりも施設数が増え会員様からの満足度は上がり、業務面でも効率化され、ほかの仕事に時間を割くことができるようになった
          </span>
          ので大変満足しております。
        </>
      ),
    },
    {
      id: 3,
      category: "携帯ショップ",
      title: "安定した売上確保",
      image: "/img/Voice4011_Person_3.png",
      content: (
        <>
          長年にわたり携帯電話の販売とサービス提供に注力してきましたが、安定した収益の確保のため、FCクラブを導入することにしました。
          <br />
          <span className="bg-[#FFFACD] px-1">
            ショットのみの売上からストックすることで売上が安定し今では全体の20%を占めるまで成長
          </span>
          しました。
        </>
      ),
    },
  ];

  return (
    <section className="py-[4vw] lg:py-16 px-[2vw] lg:px-4 bg-[#FFFEF5]">
      <div className="max-w-[90vw] lg:max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-[5vw] lg:mb-20">
          <p className="text-[1.35vw] lg:text-sm tracking-widest text-gray-600 mb-[0.5vw] lg:mb-2 font-serif italic">
            Voices of Users
          </p>
          <div className="flex items-center justify-center gap-[1vw] lg:gap-4">
            <div className="flex-1 max-w-[12.5vw] lg:max-w-[200px]">
              <svg
                className="w-full h-[1vw] lg:h-2"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <pattern
                  id="diagonal-lines-left"
                  patternUnits="userSpaceOnUse"
                  width="4"
                  height="10"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="10"
                    stroke="#9CA3AF"
                    strokeWidth="1"
                  />
                </pattern>
                <rect
                  width="200"
                  height="10"
                  fill="url(#diagonal-lines-left)"
                />
              </svg>
            </div>
            <h2 className={`text-[4.25vw] lg:text-5xl font-bold whitespace-nowrap ${kosugiMaru.className}`}>
              導入者の声
            </h2>
            <div className="flex-1 max-w-[12.5vw] lg:max-w-[200px]">
              <svg
                className="w-full h-[1vw] lg:h-2"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <pattern
                  id="diagonal-lines-right"
                  patternUnits="userSpaceOnUse"
                  width="4"
                  height="10"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="10"
                    stroke="#9CA3AF"
                    strokeWidth="1"
                  />
                </pattern>
                <rect
                  width="200"
                  height="10"
                  fill="url(#diagonal-lines-right)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 導入事例カード */}
        <div className="space-y-[4vw] lg:space-y-16">
          {voices.map((voice) => (
            <div key={voice.id} className="relative pt-[4vw] lg:pt-16 pl-[7vw] lg:pl-[15%]">
              {/* メインカード */}
              <div className="relative">
                {/* カテゴリータグ（カードの外、枠線に重なる） */}
                <div className="absolute top-[1.25vw] lg:top-5 right-0 z-10 flex items-center">
                  {/* 左側の線 */}
                  {/* rounded 左上と右上のみ */}
                  <div className={`bg-[#9ACD32] text-white px-[2vw] lg:px-8 pt-[0.25vw] lg:pt-1 pb-[5vw] lg:pb-20 font-bold text-[1.5vw] lg:text-2xl shadow-md -translate-y-1/2 rounded-tl-[0.75vw] lg:rounded-tl-3xl rounded-tr-[0.75vw] lg:rounded-tr-3xl ${kosugiMaru.className}`}>
                    {voice.category}
                  </div>
                </div>

                {/* 緑の枠線付きカード */}
                <div className="border-[0.44vw] lg:border-[7px] border-[#9ACD32] rounded-[1.875vw] lg:rounded-3xl bg-white shadow-lg overflow-visible relative z-20">
                  <div className="flex flex-row">
                    {/* 左側: 斜線パターンエリア（左下の三角形） */}
                    <div className="w-1/4 md:w-1/5 lg:w-1/3 relative min-h-[20vw] lg:min-h-[320px]">
                      {/* 左下の三角形の斜線パターン（小さく） */}
                      <div className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden rounded-bl-[1.875vw] lg:rounded-bl-3xl">
                        <svg
                          className="absolute bottom-0 left-0 w-full h-full"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                        >
                          <defs>
                            <pattern
                              id={`diagonal-pattern-${voice.id}`}
                              patternUnits="userSpaceOnUse"
                              width="4"
                              height="4"
                              patternTransform="rotate(45)"
                            >
                              <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="4"
                                stroke="#9ACD32"
                                strokeWidth="1.5"
                                opacity="0.4"
                              />
                            </pattern>
                          </defs>
                          {/* 三角形のクリップパス（急こう配） */}
                          <defs>
                            <clipPath id={`triangle-clip-${voice.id}`}>
                              <polygon points="0,100 100,100 0,0" />
                            </clipPath>
                          </defs>
                          <rect
                            width="100"
                            height="100"
                            fill={`url(#diagonal-pattern-${voice.id})`}
                            clipPath={`url(#triangle-clip-${voice.id})`}
                          />
                        </svg>
                      </div>
                    </div>

                    {/* 右側: コンテンツエリア */}
                    <div className="w-2/3 pr-[1vw] lg:pr-16 py-[2.5vw] lg:py-10 pl-0">
                      {/* タイトル */}
                      <h3 className="text-[1.875vw] lg:text-3xl font-bold text-[#6B8E23] mb-0 pb-[1vw] lg:pb-4 border-b-[0.19vw] lg:border-b-[3px] border-gray-300">
                        {voice.title}
                      </h3>

                      {/* 説明文 */}
                      <div className="text-gray-800 text-[1.125vw] lg:text-lg leading-[2.2] tracking-[0.05em] text-bold mt-[1vw] lg:mt-4">
                        {voice.content}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 顔写真（カードの外、左上にはみ出す） */}
                <div className="absolute -top-[3vw] lg:-top-12 left-[1.375vw] lg:-left-14 xl:left-10 z-30">
                  <div className="relative">
                    {/* 薄い緑の影（四角） */}
                    <div className="absolute top-[0.5vw] lg:top-2 -left-[3vw] lg:-left-12 w-[18.75vw] lg:w-[300px] h-[18.75vw] lg:h-[300px] bg-[#C8E6C9] opacity-60"></div>
                    {/* 写真 */}
                    <div className="relative -top-[0.75vw] lg:-top-3 -left-[4vw] lg:-left-16 w-[18.75vw] lg:w-[300px] h-[18.75vw] lg:h-[300px] shadow-lg bg-white">
                      <Image
                        src={voice.image}
                        alt={`${voice.category}の導入事例`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

