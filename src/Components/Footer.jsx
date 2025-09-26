const Footer = () => {
  return (
    <footer className="flex h-auto flex-col sm:block bg-white pt-10">
      <div className="p-5 flex flex-col sm:flex-row gap-10 border-between sm:justify-around border-gray-300">
        <div className="flex justify-center sm:block">
          <img
            src="/FoodBetterBlack.png"
            alt="Logo Food Better"
            className="p-5 w-35"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-35 text-start">
          <div className=" flex-1 justify-center">
            <h1 className="pb-3 text-xl font-bold">Feed Better</h1>
            <p className="cursor-pointer pb-2 hover:text-blue-500 hover:underline">
              Fale Conosco
            </p>
            <p className="cursor-pointer  hover:text-blue-500 hover:underline">
              {" "}
              Trabalhe Conosco
            </p>
          </div>

          <div className="flex-1">
            <h1 className="pb-3 text-xl font-bold">Descubra</h1>
            <p className="cursor-pointer pb-2  hover:text-blue-500 hover:underline">
              Cadastre seu restaurante
            </p>
            <p className="cursor-pointer pb-2  hover:text-blue-500 hover:underline">
              Termos de uso
            </p>
            <p></p>
          </div>

          <div className="flex-1">
            <h1 className="pb-3 text-xl font-bold">Social</h1>
            <p className="cursor-pointer pb-2  hover:text-blue-500 hover:underline">
              Facebook
            </p>
            <p className="cursor-pointer pb-2  hover:text-blue-500 hover:underline">
              Instagram
            </p>
            <p className="cursor-pointer  hover:text-blue-500 hover:underline">
              Youtube
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300  pt-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Feed Better | Todos os direitos
        reservados
      </div>
    </footer>
  );
};

export default Footer;
