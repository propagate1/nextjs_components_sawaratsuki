'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '質問可能な科目は？',
    answer: '全学年全科目に対応しています！',
  },
  {
    question: 'どんな講師が登録していますか？',
    answer: '東大・京大・医学生など、認定率10%を突破した講師陣が200名以上集結しています。',
  },
  {
    question: '講師の交代は可能ですか？',
    answer: 'はい、可能です。お気軽にご相談ください。',
  },
  {
    question: '解説に時間制限はありますか？',
    answer: 'いいえ、時間制限はございません。納得いくまでご質問いただけます。',
  },
];

export default function FAQ4009() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-[#FFF8E8] py-28 px-8 sm:px-12 lg:px-16 font-bold min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* ヘッダーセクション - 三分割レイアウト */}
        <div className="flex items-center justify-center gap-8 mb-20">
          {/* 左側のイラスト装飾 */}
          <div className="flex-1 flex justify-end items-start hidden sm:block">
            <Image
              src="/img/FAQ4009_Background_1.png"
              alt="左側装飾"
              width={360}
              height={360}
              className="w-56 sm:w-72 lg:w-[21rem] h-auto"
            />
          </div>

          {/* 中央のタイトル */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#FFB84D] mb-3">Q & A</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold">よくあるご質問</p>
          </div>

          {/* 右側のイラスト装飾 */}
          <div className="flex-1 flex justify-start items-start hidden sm:block">
            <Image
              src="/img/FAQ4009_Background_2.png"
              alt="右側装飾"
              width={360}
              height={360}
              className="w-56 sm:w-72 lg:w-[21rem] h-auto"
            />
          </div>
        </div>

        {/* アコーディオンセクション */}
        <div className="max-w-6xl mx-auto space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-1xl overflow-hidden transition-all duration-300"
            >
              {/* 質問部分 */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-10 py-10 flex items-center justify-between text-left transition-colors duration-200"
              >
                <div className="flex items-center gap-5 flex-1">
                  <span className="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#FFB84D] flex-shrink-0">
                    Q
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndexes.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* 回答部分 */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndexes.includes(index) ? 'max-h-[540px]' : 'max-h-0'
                }`}
              >
                <div className="bg-[#FFF8E8]">
                  <div className="flex items-start gap-5 px-9 py-7">
                    <span className="text-5xl sm:text-6xl lg:text-4xl font-bold text-[#FF9824] flex-shrink-0">
                      A
                    </span>
                    <p className="text-xl sm:text-2xl lg:text-xl text-gray-700 font-bold pt-2">
                      {faq.answer}
                    </p>
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

