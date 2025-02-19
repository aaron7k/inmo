import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-[-4px_4px_10px_rgba(0,0,0,0.2)]">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-[#2df9b4]" />
          <h2 className="mt-6 text-3xl font-extrabold text-[#14143a]">
            ¡Gracias por registrarte!
          </h2>
          <p className="mt-4 text-gray-600">
            Hemos enviado un correo electrónico a tu dirección con las instrucciones para crear tu contraseña y acceder a tu cuenta.
          </p>
          <p className="mt-4 text-gray-600">
            Por favor, revisa tu bandeja de entrada y sigue los pasos indicados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
