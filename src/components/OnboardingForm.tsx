import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import { Building2, User, Mail, Phone } from 'lucide-react';
import { toast } from 'react-toastify';

interface FormData {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const OnboardingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://hooks.soyultra.co/webhook/inmo/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      navigate('/thank-you');
    } catch (error) {
      toast.error('Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-[-4px_4px_10px_rgba(0,0,0,0.2)]">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://inmo.ai/wp-content/uploads/2025/02/logo.svg"
            alt="INMO"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#14143a]">
            Crea tu cuenta en INMO
          </h2>
          <h3 className="mt-2 text-center text-sm text-gray-600">
            Completa el formulario para comenzar
          </h3>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('companyName', { required: 'Este campo es requerido' })}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2df9b4] focus:border-transparent"
                  placeholder="Nombre de la Inmobiliaria"
                />
              </div>
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('firstName', { required: 'Este campo es requerido' })}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2df9b4] focus:border-transparent"
                  placeholder="Nombre"
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('lastName', { required: 'Este campo es requerido' })}
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2df9b4] focus:border-transparent"
                  placeholder="Apellido"
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo electrónico inválido',
                    },
                  })}
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2df9b4] focus:border-transparent"
                  placeholder="Correo Electrónico"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: 'Este campo es requerido' }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      international
                      defaultCountry="MX"
                      value={value}
                      onChange={onChange}
                      className="pl-10"
                    />
                  )}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-[#14143a] bg-[#2df9b4] hover:bg-[#25d99c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2df9b4] transition-colors duration-200"
            >
              Crear Subcuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;
