"use client";

import React from "react";
import Image from "next/image";

export default function Features4014() {
  return (
    <section className="relative w-full bg-[#E8DDD0] overflow-hidden font-serif">
      {/* スケーリングコンテナ */}
      <div className="w-full origin-top" style={{
        transform: 'scale(var(--scale))',
        '--scale': 'min(1, 100vw / 1400px)'
      } as React.CSSProperties}>
        <div className="w-[1400px] py-20">
          {/* コンテンツエリア */}
          <div className="relative z-10 px-8">
            <div className="flex flex-col">
              {/* 上部エリア（左右の配置） */}
              <div className="relative flex items-stretch justify-between mb-0">
                {/* 背景画像 - 寝ている人（左側） - 右側と同じ高さ */}
                <div className="relative w-1/2 min-h-0">
                  <Image
                    src="/img/Features4014_Background_1.png"
                    alt="寝ている人"
                    width={700}
                    height={800}
                    className="object-contain object-left"
                    priority
                  />
                </div>
                {/* 右側コンテンツ */}
                <div className="w-1/2 pl-8 flex flex-col">
                  {/* ヘッダー部分 */}
                  <div className="mb-12">
                    {/* 上部の吹き出し画像 */}
                    <div className="mb-4">
                      <Image
                        src="/img/Features4014_Comment_2.png"
                        alt="みやびのオーダーメイド枕はココが違う"
                        width={400}
                        height={80}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    
                    {/* タイトルエリア */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="inline-block border-4 font-bold border-[#6B4423] text-[#6B4423] rounded-xl px-4 py-1">
                        <p className="text-sm font-bold">他店にはできない</p>
                      </div>
                      <h2 className="text-6xl font-bold text-[#6B4423]">
                        職人<span className="text-[70%]">の</span>こだわり
                      </h2>
                    </div>
                  </div>

                  {/* 特徴1 - オーダーメイド */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-1">
                      <div className="border-l-4 border-[#D97B8F] pl-4">
                        <h3 className="text-xl font-bold text-[#D97B8F] mb-2 leading-relaxed">
                          あなたの身体にあった高さで
                          <br />
                          「ミリ単位」で調整
                        </h3>
                        <p className="text-sm text-[#6B4423] leading-relaxed font-medium">
                          私たちのお店はオーダーメイドまくらの専門店です。頭部を測定して正しい高さ(バランス)をお客様と一緒に探していきます。ご安心ください。
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-32 h-32 relative bg-white rounded-lg shadow-md overflow-hidden">
                      <Image
                        src="/img/Features4014_Person_1.png"
                        alt="オーダーメイド枕"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 特徴2 - シンプルでフラット */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-1">
                      <div className="border-l-4 border-[#D97B8F] pl-4">
                        <h3 className="text-xl font-bold text-[#D97B8F] mb-2 leading-relaxed">
                          寝返りがうちやすい
                          <br />
                          シンプルでフラットな構造
                        </h3>
                        <p className="text-sm text-[#6B4423] leading-relaxed font-medium">
                          枕に凹凸があると寝返りが困難になります。硬く横返りのうちやすいフラット（平ら）な形状です。
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-32 h-32 relative bg-white rounded-lg shadow-md overflow-hidden">
                      <Image
                        src="/img/Features4014_Person_2.png"
                        alt="シンプルな枕"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 特徴3 - リラックス */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-1">
                      <div className="border-l-4 border-[#D97B8F] pl-4">
                        <h3 className="text-xl font-bold text-[#D97B8F] mb-2 leading-relaxed">
                          自然リラックスできる。
                          <br />
                          頭をしっかりそえられる硬さ
                        </h3>
                        <p className="text-sm text-[#6B4423] leading-relaxed font-medium">
                          適度な弾力を帯がありますので、適していく場になりやすくなります。ウレタンの組み合わせで硬さの調整は可能となっております。
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-32 h-32 relative bg-white rounded-lg shadow-md overflow-hidden">
                      <Image
                        src="/img/Features4014_Person_3.png"
                        alt="リラックス"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 横向きのほうが側向けより... セクション - 画像 */}
                  <div className="relative w-full">
                    <Image
                      src="/img/Features4014_Comment_1.png"
                      alt="横向き寝の説明"
                      width={600}
                      height={250}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-[#6B4423] mb-4">
                        横向きのほうが仰向けよりも高さが必要なのでは？
                      </h3>
                      <p className="text-sm text-[#6B4423] leading-relaxed mb-3 font-medium">
                        立っている時と横向きで寝る時の肩幅は違います。横向きで寝ると自然に肩が巻きこみます。そのままリラックスするとさらに肩は大きく巻きこみます。その上、横向きの方が寝具と接する表面積が狭いのでマットレスに圧力がかかり、より大きく沈むのです。
                      </p>
                      <p className="text-sm text-[#6B4423] leading-relaxed font-medium">
                        仰向け＋横向きのどちらでもあう高さは1ミリ単位で調整すれば可能なのです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下部エリア（左右全体に広がる） - 上下に線 */}
              <div className="w-full border-t-2 border-[#8B7355] mt-8">
                <div className="bg-[#E8DDD0] py-8 px-12 border-b-2 border-[#8B7355]">
                  <div className="flex items-start gap-8">
                    {/* 左側：白背景の見出しボックス */}
                    <div className="bg-white px-6 py-4 rounded-sm shadow-sm">
                      <h3 className="text-lg font-bold text-[#6B4423] leading-relaxed whitespace-nowrap">
                        お作りいただいた
                        <br />
                        枕について
                      </h3>
                    </div>
                    
                    {/* 右側：説明テキスト（箇条書き） */}
                    <div className="flex-1 space-y-0 text-sm text-[#6B4423] leading-relaxed font-medium">
                      <p className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-[#6B4423] rounded-full mt-1.5"></span>
                        <span>枕は当日すぐにお渡しできますので、その日からすぐにご使用いただけます。※枕カバー付き</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-[#6B4423] rounded-full mt-1.5"></span>
                        <span>自宅で枕を使う際に店舗で調整したときと高さが違って感じる場合があります。これは枕の調整時より<br />
                        自宅でリラックスしている時の方が筋肉がゆるむことが原因です。さらにマットレスや布団との相性に<br />
                        よっても変わります。当店ではこれらを考慮に入れてあなただけの枕をお作りしています。自宅でも簡<br />
                        単に微調整できるように高さを調整できる素材もお渡ししております。</span>
                      </p>
                    </div>
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
