import { useState } from 'react';

const alcoholOptions = [
  'Вино белое сухое',
  'Вино белое п/сладкое',
  'Вино красное сухое',
  'Вино красное п/сладкое',
  'Шампанское п/сладкое',
  'Шампанское сухое',
  'Пиво бутылочное',
  'Водка',
  'Самогон',
  'Коньяк',
  'Виски',
  'Безалкогольное',
];

interface Guest {
  id: number;
  name: string;
  alcohol: string;
}

export const GuestForm = () => {
  const [mainGuest, setMainGuest] = useState({
    name: '',
    alcohol: alcoholOptions[0],
  });
  const [additionalGuests, setAdditionalGuests] = useState<Guest[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addGuest = () => {
    setAdditionalGuests([
      ...additionalGuests,
      { id: Date.now(), name: '', alcohol: alcoholOptions[0] },
    ]);
  };

  const removeGuest = (id: number) => {
    setAdditionalGuests(additionalGuests.filter((guest) => guest.id !== id));
  };

  const updateGuest = (id: number, field: keyof Guest, value: string) => {
    setAdditionalGuests(
      additionalGuests.map((guest) =>
        guest.id === id ? { ...guest, [field]: value } : guest
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      mainGuest: {
        name: mainGuest.name,
        alcohol: mainGuest.alcohol
      },
      additionalGuests: additionalGuests.map(({ name, alcohol }) => ({ name, alcohol }))
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyKtaNg35XMyZtr6yZ-AlJbw76oi8ehuobznQG9sJ-Kbb8SfJ_Elv44I8srBENdzSX4zQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      alert('Спасибо! Ваш ответ отправлен.');
      setMainGuest({ name: '', alcohol: alcoholOptions[0] });
      setAdditionalGuests([]);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-2 py-12 max-xl:mb-10">
      <div className="bg-[#FBF8F1] backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl border border-[#C3937C] border-2">
        <h3 className="text-2xl md:text-3xl color1 mb-6 text-center uppercase tracking-wider">
          Пожалуйста дайте нам знать кого ждать, и какие у вас предпочтения напитков
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-lg color2 font-medium">Вы</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm color2 mb-1">Имя и фамилия *</label>
                <input
                  type="text"
                  required
                  value={mainGuest.name}
                  onChange={(e) =>
                    setMainGuest({ ...mainGuest, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#C3937C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C3937C] bg-white"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm color2 mb-1">Ваш выбор напитка</label>
                <select
                  value={mainGuest.alcohol}
                  onChange={(e) =>
                    setMainGuest({ ...mainGuest, alcohol: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#C3937C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C3937C] bg-white"
                >
                  {alcoholOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {additionalGuests.length > 0 && (
            <div className="space-y-6">
              <h4 className="text-lg color2 font-medium">Ваши гости</h4>
              {additionalGuests.map((guest) => (
                <div
                  key={guest.id}
                  className="relative p-4 border border-[#C3937C]/20 rounded-xl bg-white/50"
                >
                  <button
                    type="button"
                    onClick={() => removeGuest(guest.id)}
                    className="absolute top-2 right-2 text-[#C3937C] hover:text-red-600 transition-colors"
                    aria-label="Удалить гостя"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                    <div>
                      <label className="block text-sm color2 mb-1">Имя и фамилия</label>
                      <input
                        type="text"
                        value={guest.name}
                        onChange={(e) =>
                          updateGuest(guest.id, 'name', e.target.value)
                        }
                        className="w-full px-4 py-2 border border-[#C3937C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C3937C] bg-white"
                        placeholder="Пётр Петров"
                      />
                    </div>
                    <div>
                      <label className="block text-sm color2 mb-1">Выбор напитка</label>
                      <select
                        value={guest.alcohol}
                        onChange={(e) =>
                          updateGuest(guest.id, 'alcohol', e.target.value)
                        }
                        className="w-full px-4 py-2 border border-[#C3937C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C3937C] bg-white"
                      >
                        {alcoholOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={addGuest}
            className="flex items-center gap-2 px-6 py-3 bg-[#C3937C] text-white rounded-full hover:bg-[#b07e68] transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Добавить гостя
          </button>

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 py-4 bg-[#C3937C] text-white text-lg uppercase tracking-wider rounded-full hover:bg-[#b07e68] transition-colors shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить ответ'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};