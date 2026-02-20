export const AllInfo = () => {
    return (
        <section className="w-full mx-auto lg:pt-24 text1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                <div className="order-1 lg:pl-80 px-2 z-10">
                    <h3 className="text-xl color2 mb-4 uppercase">
                        Life is an event
                    </h3>
                    <h2 className="text-4xl color1 mb-4 uppercase">Приглашаем на свадьбу Александра и Натальи</h2>
                    <p className="color2 text-2xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Eligendi in laboriosam illo, et atque labore, animi voluptas
                        similique at doloribus officia, quas cupiditate! Iusto fugiat
                        molestiae ipsa sint quaerat eveniet.
                    </p>
                </div>
                <div className="order-2 flex justify-center relative max-xl:px-2">
                    <img
                        src="public/photo1.jpg"
                        alt="Описание"
                        className="w-full h-[393px] xl:rounded-tl-[170px] object-cover object-center z-5 max-xl:border-4 border-[#C3937C]"
                    />
                    <img src="public/gold.png" alt="" className="absolute top-[-200px] xl:top-[-400px] xl:right-70 xl:rotate-45 z-0 xl:z-10" />

                    <img
                        src="public/ramka.png"
                        alt=""
                        className="absolute top-[-22px] left-[-20px] xl:hidden w-30 z-10 overflow-hidden"
                    />
                </div>
            </div>
        </section>
    )
}