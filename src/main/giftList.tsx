import { useState } from 'react';

const giftsData = [
  {
    id: 1,
    title: 'Набор посуды',
    image: 'public/gifts/gift.png',
  },
  {
    id: 2,
    title: 'Кофеварка',
    image: 'public/gifts/gift.png',
  },
  {
    id: 3,
    title: 'Постельное белье',
    image: 'public/gifts/gift.png',
  },
  {
    id: 4,
    title: 'Ваза для цветов',
    image: 'public/gifts/gift.png',
  },
  {
    id: 5,
    title: 'Книга рецептов',
    image: 'public/gifts/gift.png',
  },
  {
    id: 6,
    title: 'Плед',
    image: 'public/gifts/gift.png',
  },
];

export const GiftList = () => {
  const [reservedGifts, setReservedGifts] = useState(new Set());

  const handleReserve = (giftId: unknown) => {
    if (reservedGifts.has(giftId)) {
      setReservedGifts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(giftId);
        return newSet;
      });
    } else {
      setReservedGifts((prev) => new Set(prev).add(giftId));
      console.log(`Подарок ID ${giftId} зарезервирован`);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-2 py-12">
      <h3 className="text-2xl md:text-3xl color1 mb-8 text-center uppercase tracking-wider">
        Список подарков
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {giftsData.map((gift) => {
          const isReserved = reservedGifts.has(gift.id);
          return (
            <div
              key={gift.id}
              className="relative group bg-white p-3 rounded-lg shadow-md border border-[#C3937C]/20 hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 border-2 border-[#C3937C]/30 rounded-lg pointer-events-none" />
              
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              <h4 className="text-center color2 font-medium text-sm md:text-base mb-2">
                {gift.title}
              </h4>
              
              <button
                onClick={() => handleReserve(gift.id)}
                disabled={isReserved}
                className={`w-full py-2 px-3 rounded-full text-sm uppercase tracking-wider transition-colors ${
                  isReserved
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-[#C3937C] text-white hover:bg-[#b07e68]'
                }`}
              >
                {isReserved ? 'Зарезервировано' : 'Зарезервировать'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};