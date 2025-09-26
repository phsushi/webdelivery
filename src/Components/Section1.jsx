import comum2 from '../assets/section2_1_food.jpg';


const Section1 = () => {
    return(
    <section className="flex flex-col w-full h-150">
        <div className="flex flex-col w-full h-150 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${comum2})`}}>
            <div className="flex flex-col w-[95vmin] h-[15vmax]  max-w-lg mt-29 ml-3 text-black p-10">
            <h1 className="flex flex-col font-bold text-4xl underline text-[#206138]">
                Peça em minutos com o Feed Better
            </h1>
            <p className="flex flex-col  mt-2 text-lg font-bold space-y-2">
                Pratos saudáveis preparados para você aproveitar o melhor da gastronomia e manter sua saude em dia.
                Basta escolher no app, pedir e saborear, rápido e sofisticado, como você e seu corpo merece.
            </p>
            <button className="flex flex-col text-lg text-white
                font-bold   mt-3 bg-[#206138] p-2 w-full rounded-full 
                hover:scale-110 transition-transform cursor-pointer">
                    Baixar
            </button>
            </div>
        </div>
    </section>
    )
}
export default Section1;