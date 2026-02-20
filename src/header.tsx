export const Header = () => {
    return (
        <header className="max-w-7xl mx-auto px-4 xl:px-0 py-2 xl:py-8.5">
            <div className="flex justify-between items-start">
                <a className="relative text_logo" href="/">
                    <div className="w-64 h-28 bg-contain bg-no-repeat bg-center 
                                  md:w-64 md:h-28 
                                  sm:w-48 sm:h-24
                                  max-sm:w-32 max-sm:h-20"
                         style={{ backgroundImage: 'url("public/Logo.png")' }}>
                        <div className="w-full h-full flex flex-col items-center justify-center 
                                      text-3xl color1 text-center pt-6 leading-none
                                      md:text-2xl md:pt-5
                                      sm:text-xl sm:pt-4
                                      max-sm:text-base max-sm:pt-3">
                            <h2>Приглашаем</h2>
                            <h2>На свадьбу</h2>
                        </div>
                    </div>
                </a>
                <nav className="pt-14 w-80 flex justify-between color1 text-xl text1
                              xl:w-80 xl:pt-12 xl:text-xl
                              lg:w-72 lg:pt-12 lg:text-lg
                              md:w-64 md:pt-12 md:text-base
                              sm:w-56 sm:pt-12 sm:text-sm
                              max-sm:w-40 max-sm:pt-9 max-sm:text-xs">
                    <a href="#date">Дата</a>
                    <a href="#place">Место</a>
                    <a href="#contacts">Контакты</a>
                    <a href="#photos">Фото</a>
                </nav>
            </div>
        </header>
    )
}