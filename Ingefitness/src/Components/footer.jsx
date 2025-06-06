const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ingele Fitness. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Política de privacidad</a>
          <a href="#" className="hover:underline">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
