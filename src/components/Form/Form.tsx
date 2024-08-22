import React, { useState } from "react";
import { H3, P } from "../ui/typographies";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Navigation03Icon } from "hugeicons-react";
import { Card } from "../ui/card";
import { CompletedScreen } from "./CompletedScreen";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateView } from "../AnimateView";

/**
 * Form component, it displays a form with a name and email input fields.
 */
export const Form = () => {
    const [status, setStatus] = useState<('pending' | 'completed')>('pending');

    const [form, setForm] = useState<{
        name: string,
        email: string
    }>({
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState<{
        name?: string,
        email?: string
    }>({});

    const validateForm = () => {
        let isValid = true;
        const newErrors: { name?: string; email?: string } = {};

        if (!form.name.trim()) {
            newErrors.name = "El nombre es requerido";
            isValid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = "El correo electrónico es requerido";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "El correo electrónico no es válido";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const triggerFormStatus = () => {
        status === 'pending' ? setStatus('completed') : setStatus('pending');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            // Send form data to the server
            console.log("Form submitted:", form);
            triggerFormStatus();
        }
    }

    return (
        <AnimateView>
            <Card className="p-6">
                <AnimatePresence>
                    {
                        status === 'pending' ? (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-start justify-start gap-6"
                                onSubmit={handleSubmit}
                            >
                                <H3>Formulario: </H3>
                                <section className="flex w-full flex-col md:flex-row items-start justify-start gap-3">
                                    <section className="flex flex-col items-start justify-start gap-2 w-full md:w-fit">
                                        <P>Nombre: </P>
                                        <Input 
                                            placeholder="Nombre" 
                                            value={form.name} 
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className={errors.name ? "border-red-500" : ""}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </section>
                                    <section className="flex flex-col items-start justify-start gap-2 w-full md:w-fit">
                                        <P>Correo electrónico: </P>
                                        <Input 
                                            placeholder="Correo electrónico" 
                                            type="email" 
                                            value={form.email} 
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className={errors.email ? "border-red-500" : ""}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </section>
                                </section>
                                <Button className="flex flex-row items-center gap-3" type="submit">
                                    Enviar <Navigation03Icon />
                                </Button>
                            </motion.form>
                        ) : (
                            <CompletedScreen />
                        )
                    }
                </AnimatePresence>
            </Card>
        </AnimateView>
    )
}