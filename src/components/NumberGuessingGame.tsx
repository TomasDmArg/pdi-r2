import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { H2 } from "./ui/typographies";
import { motion } from "framer-motion";

/**
 * Componente NumberGuessingGame
 * 
 * Este componente implementa un juego de adivinanza de números donde el usuario
 * intenta adivinar un número aleatorio entre 1 y 100.
 * 
 * @returns {JSX.Element} El componente NumberGuessingGame renderizado
 */
export const NumberGuessingGame: React.FC = (): JSX.Element => {
    const [targetNumber, setTargetNumber] = useState<number>(0);
    const [guess, setGuess] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [attempts, setAttempts] = useState<number>(0);
  
    useEffect(() => {
      setTargetNumber(Math.floor(Math.random() * 100) + 1);
    }, []);
  
    /**
     * Maneja el envío del formulario de adivinanza
     * 
     * @param {React.FormEvent} e - El evento de envío del formulario
     */
    const handleSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      const numGuess: number = parseInt(guess);
      setAttempts(attempts + 1);
  
      if (isNaN(numGuess)) {
        setMessage('Por favor, ingresa un número válido.');
      } else if (numGuess === targetNumber) {
        setMessage(`¡Felicidades! Adivinaste el número en ${attempts + 1} intentos.`);
      } else if (numGuess < targetNumber) {
        setMessage('¡Muy bajo! Intenta con un número más alto.');
      } else {
        setMessage('¡Muy alto! Intenta con un número más bajo.');
      }
  
      setGuess('');
    };
  
    return (
      <Card className="w-full">
        <CardContent className="p-1 flex flex-col items-center justify-center gap-8 h-full py-10 min-h-[100vh] text-center">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <H2>Juego de Adivinar el Número</H2>
            <p>Estoy pensando en un número entre 1 y 100.</p>
          </motion.section>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 w-full max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="number"
              value={guess}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuess(e.target.value)}
              placeholder="Ingresa tu suposición"
            />
            <Button type="submit" className="w-full">Enviar Suposición</Button>
          </motion.form>
          {message && <p className="mt-4">{message}</p>}
          <p className="mt-4">Intentos: {attempts}</p>
        </CardContent>
      </Card>
    );
  };