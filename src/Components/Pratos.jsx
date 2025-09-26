import hamburguer from '../assets/card_food_2.png';
import comum from '../assets/card_food.png';
import vegano from '../assets/vegano.png';

const Pratos = () => {
    return (
        <div className="pt-10 pb-10 w-full h-full text-center bg-red-50 flex justify-center items-center flex-col gap-4">
            <div>
                <h1 className="font-extrabold font-sans text-3xl text-gray-800">Alimente-se bem sem sacrificar o sabor</h1>
                <p className="font-sans text-2xl text-gray-800 font-medium">escolha entre uma diversidade enorme de pratos saudáveis e deliciosos</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-col md:flex-row justify-center items-center transition-transform">
                <div className="transition-transform bg-[#f7f8f8] hover:scale-106 p-4 rounded-lg shadow-lg w-80 flex flex-col items-center text-center">
                    <img src={hamburguer} alt="hamburguer" className="w-65 mb-4" />
                    <div className="p-6">
                        <h1 className="font-bold text-xl mb-2">Hamburgueres</h1>
                        <p className="text-gray-800 font-medium">Hambúrguer com ingredientes frescos e naturais</p>
                    </div>
                </div>

                <div className="transition-transform hover:scale-106 bg-[#f7f8f8] p-4 rounded-lg shadow-lg w-80 flex flex-col items-center text-center">
                    <img src={comum} alt="prato variado" className="w-65 mb-4" />
                    <div className="p-6">
                        <h1 className="font-bold text-xl mb-2">Pratos variados</h1>
                        <p className="text-gray-800 font-medium">Pratos balanceados e com todos os nutrientes que você precisa</p>
                    </div>
                </div>

                <div className="transition-transform hover:scale-106 bg-[#f7f8f8] p-4 rounded-lg shadow-lg w-80 flex flex-col items-center text-center">
                    <img src={vegano} alt="prato vegano" className="w-65 mb-4" />
                    <div className="p-6">
                        <h1 className="font-bold text-xl mb-2">Vegano</h1>
                        <p className="text-gray-800 font-medium">Opções veganas completas e deliciosas</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Pratos;