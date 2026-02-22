import { useState, useEffect } from 'react';

export const Timer = ({ weddingDate = '2026-06-26T18:00:00' }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(weddingDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isWeddingDay: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isWeddingDay: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const formatNumber = (num: number) => num < 10 ? `0${num}` : num;

  if (timeLeft.isWeddingDay) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold color1 animate-pulse">
            Свадьба сегодня!
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Этот день настал! Желаем вам незабываемого праздника!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-2 lg:pt-24 xl:mb-50 flex max-xl:flex-col-reverse lg:justify-between lg:items-center flex-row-reverse gap-3 xl:gap-12">
      <div className="px-4 py-8 md:py-12 xl:rounded-bl-[170px] xl:w-[59%] xl:border-4 border-[#C3937C] relative">
        <img
            src="public/ramka.png"
            alt=""
            className="absolute top-[-60px] right-[-73px] w-30 xl:w-auto z-10 overflow-hidden max-xl:hidden rotate-y-180"
          />
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif mb-3 color1 ">
            До нашей свадьбы осталось
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">
            Мы ждём этого дня с огромным нетерпением
          </p>
        </div>

        <div className="flex justify-center flex-nowrap gap-2 sm:gap-6">
          {[
            { value: formatNumber(timeLeft.days), label: 'Дн', color: 'bg-[#FBF8F1]' },
            { value: formatNumber(timeLeft.hours), label: 'Час', color: 'bg-[#FBF8F1]' },
            { value: formatNumber(timeLeft.minutes), label: 'Мин', color: 'bg-[#FBF8F1]' },
            { value: formatNumber(timeLeft.seconds), label: 'Сек', color: 'bg-[#FBF8F1]' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
              <div className={`
              ${item.color} 
              w-12 h-12 
              sm:w-16 sm:h-16
              md:w-20 md:h-20
              lg:w-24 lg:h-24
              flex items-center justify-center 
              rounded-t-lg 
              shadow-inner 
              border border-gray-200
            `}>
                <span className="
                text-lg 
                sm:text-xl 
                md:text-3xl 
                font-bold 
                color1
              ">
                  {item.value}
                </span>
              </div>

              <div className={`
              ${item.color} 
              w-12 
              sm:w-16
              md:w-20
              lg:w-24
              py-1 sm:py-2 
              flex 
              justify-center 
              rounded-b-lg 
              shadow-md 
              border 
              border-gray-200 
              border-t-0
            `}>
                <span className="
                text-xs 
                font-medium 
                color1 
                whitespace-nowrap
              ">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="xl:w-[40%] flex flex-col max-xl:items-center max-xl:text-center text1">
          <h3 className="text-lg sm:text-xl color2 mb-3 sm:mb-4 uppercase tracking-wider">
            Life is an event
          </h3>
          <h2 className="text-4xl color1 mb-4 uppercase">
            Приглашаем на свадьбу Александра и Натальи
          </h2>
          <p className="color2 text-base sm:text-lg lg:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eligendi in laboriosam illo, et atque labore, animi voluptas
            similique at doloribus officia, quas cupiditate! Iusto fugiat
            molestiae ipsa sint quaerat eveniet.
          </p>
        </div>
    </section>
  );
};