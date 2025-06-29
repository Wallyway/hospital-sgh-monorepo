import { useForm } from 'react-hook-form';
import type { UseFormProps, FieldValues, Path } from 'react-hook-form';

// Hook personalizado para manejar formularios con configuración común
export const useAppForm = <T extends FieldValues>(
  options?: UseFormProps<T>
) => {
  const methods = useForm<T>({
    ...options,
  });

  // Función helper para manejar errores de servidor (API)
  const setServerError = (field: Path<T>, message: string) => {
    methods.setError(field, {
      type: 'server',
      message,
    });
  };

  // Función helper para limpiar errores
  const clearErrors = () => {
    methods.clearErrors();
  };

  return {
    ...methods,
    setServerError,
    clearErrors,
  };
};

// Validaciones comunes reutilizables
export const validationRules = {
  email: {
    required: "El correo electrónico es obligatorio",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Formato de correo electrónico inválido",
    },
  },
  password: {
    required: "La contraseña es obligatoria",
    minLength: {
      value: 8,
      message: "Minimo 8 caracteres",
    },
  },
  name: {
    required: "El nombre es obligatorio",
  },
  phone: {
    pattern: {
      value: /^[+]?[\d\s\-()]+$/,
      message: "Formato de teléfono inválido",
    },
  },
};
