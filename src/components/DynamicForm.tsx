import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { H2 } from "./ui/typographies";
import { motion } from "framer-motion";

/**
 * Interfaz para los datos del formulario
 */
interface FormData {
  name: string;
  email: string;
  password: string;
}

/**
 * Interfaz para los errores del formulario
 */
interface FormErrors {
  name: string;
  email: string;
  password: string;
}

/**
 * Componente DynamicForm
 * 
 * Este componente renderiza un formulario dinámico con validación en tiempo real.
 * Incluye campos para nombre, correo electrónico y contraseña.
 * 
 * @returns {JSX.Element} El componente DynamicForm renderizado
 */
export const DynamicForm: React.FC = (): JSX.Element => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', password: '' });
  
    /**
     * Valida un campo del formulario
     * 
     * @param {string} name - El nombre del campo a validar
     * @param {string} value - El valor del campo a validar
     * @returns {string} El mensaje de error, si existe
     */
    const validateField = (name: string, value: string): string => {
      let error = '';
      switch (name) {
        case 'name':
          if (value.length < 3) error = 'El nombre debe tener al menos 3 caracteres';
          break;
        case 'email':
          if (!/\S+@\S+\.\S+/.test(value)) error = 'El correo electrónico no es válido';
          break;
        case 'password':
          if (value.length < 6) error = 'La contraseña debe tener al menos 6 caracteres';
          break;
      }
      return error;
    };
  
    /**
     * Maneja los cambios en los campos del formulario
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e - El evento de cambio
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    };
  
    /**
     * Maneja el envío del formulario
     * 
     * @param {React.FormEvent} e - El evento de envío del formulario
     */
    const handleSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      console.log('Formulario enviado:', formData);
    };
  
    return (
      <Card className="w-full">
        <CardContent className="p-1 flex flex-col items-center justify-center gap-8 h-full py-10 min-h-[100vh] text-center">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <H2>Formulario dinámico</H2>
            <p>Este formulario valida en tiempo real los errores</p>
          </motion.section>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 w-full max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <Button type="submit" className="w-full">Enviar</Button>
          </motion.form>
        </CardContent>
      </Card>
    );
  };