import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";
import { H2 } from "./ui/typographies";

/**
 * Componente ClickButtons
 * 
 * Este componente muestra una serie de botones animados con diferentes efectos
 * al hacer clic y doble clic. También incluye funcionalidades para cambiar el tema
 * y el fondo del componente.
 * 
 * @returns {JSX.Element} El componente ClickButtons renderizado
 */
export const ClickButtons: React.FC = (): JSX.Element => {
    const [messages, setMessages] = useState<string[]>([]);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [cardClasses, setCardClasses] = useState<string>("bg-white");
  
    /**
     * Maneja el evento de clic en un botón
     * @param {number} buttonNumber - El número del botón clickeado
     */
    const handleClick = (buttonNumber: number): void => {
      setMessages([...messages, `Botón ${buttonNumber} clickeado`]);
      
      if (buttonNumber === 1) {
        setIsDarkTheme(!isDarkTheme);
      } else if (buttonNumber === 2) {
        setCardClasses(cardClasses === "bg-white" ? "bg-blue-200" : "bg-white");
      }
    };
  
    /**
     * Maneja el evento de doble clic en un botón
     * @param {number} buttonNumber - El número del botón doble-clickeado
     */
    const handleDoubleClick = (buttonNumber: number): void => {
      setMessages([...messages, `Botón ${buttonNumber} doble-clickeado`]);
    };
  
    /**
     * Define las variantes de animación para los botones
     */
    const buttonVariants: Variants[] = [
      { 
        click: { scale: 1.2, rotate: 180, transition: { duration: 0.3 } },
        doubleClick: { scale: 0.8, borderRadius: "50%", transition: { duration: 0.3 } }
      },
      { 
        click: { y: -20, transition: { type: "spring", stiffness: 500 } },
        doubleClick: { scale: 2, transition: { duration: 0.5 } }
      },
      { 
        click: { scale: 1.1, x: [0, 10, -10, 10, 0], transition: { duration: 0.5 } },
        doubleClick: { rotate: 360, transition: { duration: 0.5 } }
      },
      { 
        click: { scale: 0.9, boxShadow: "0px 0px 8px rgba(255,0,0,0.5)", transition: { duration: 0.3 } },
        doubleClick: { scale: 1.1, boxShadow: "0px 0px 16px rgba(0,255,0,0.5)", transition: { duration: 0.3 } }
      },
      { 
        click: { scale: 1.1, color: "#f00", transition: { duration: 0.3 } },
        doubleClick: { scale: 0.9, color: "#00f", transition: { duration: 0.3 } }
      },
      { 
        click: { scale: 1.2, skew: "10deg", transition: { duration: 0.3 } },
        doubleClick: { scale: 0.8, skew: "-10deg", transition: { duration: 0.3 } }
      }
    ];

    /**
     * Define las variantes de animación para el título
     */
    const titleVariants: Variants = {
      initial: { fontSize: "1.5rem" },
      animate: { fontSize: "2rem", color: ["#000", "#f00", "#0f0", "#00f", "#000"], transition: { duration: 2, repeat: Infinity } }
    };
  
    return (
      <Card className={`w-full ${isDarkTheme ? 'bg-gray-800 text-white' : ''} ${cardClasses}`}>
        <CardContent className="p-1 flex flex-col items-center justify-center gap-8 h-full py-10 min-h-[100vh] text-center">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={titleVariants}
            >
              <H2>Botones Animados</H2>
            </motion.div>
            <p>Los botones a continuación tienen diferentes animaciones de click y doble click</p>
          </motion.section>
          <motion.div
            className="flex space-x-4 mb-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                variants={buttonVariants[num - 1]}
                whileTap="click"
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  onClick={() => handleClick(num)}
                  onDoubleClick={() => handleDoubleClick(num)}
                >
                  {num === 1 ? 'Cambiar Tema' : num === 2 ? 'Cambiar Fondo' : `Botón ${num}`}
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="max-h-[50vh] overflow-auto w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    );
  };