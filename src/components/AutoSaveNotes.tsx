import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { H2 } from "./ui/typographies";
import { Button } from "./ui/button";
import { RefreshIcon } from "hugeicons-react";

/**
 * Componente AutoSaveNotes
 * 
 * Este componente permite al usuario escribir notas que se guardan automáticamente
 * en el almacenamiento local del navegador.
 * 
 * @returns {JSX.Element} El componente AutoSaveNotes renderizado
 */
export const AutoSaveNotes: React.FC = (): JSX.Element => {
    /**
     * Estado para almacenar el contenido de la nota
     * Se inicializa con el valor guardado en el almacenamiento local, si existe
     */
    const [note, setNote] = useState(() => {
      const savedNote = localStorage.getItem('autoSaveNote');
      return savedNote || '';
    });

    /**
     * Estado para almacenar la fecha y hora del último guardado
     */
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
    /**
     * Función para guardar la nota en el almacenamiento local
     */
    const saveNote = useCallback(() => {
      console.log('Guardando nota:', note);
      localStorage.setItem('autoSaveNote', note);
      setLastSaved(new Date());
    }, [note]);
  
    /**
     * Efecto para guardar automáticamente la nota después de 2 segundos de inactividad
     */
    useEffect(() => {
      const timer = setTimeout(() => {
        if (note) {
          saveNote();
        }
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [note, saveNote]);

    /**
     * Función para recargar la página
     */
    const handleRefresh = () =>
      typeof window != "undefined" && window.location.reload();
    
    return (
      <Card className="w-full">
        <CardContent className="p-1 flex flex-col items-center justify-center gap-8 h-full py-10 min-h-[100vh] text-center">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 max-w-[400px]"
          >
            <H2>Notas con Auto-guardado</H2>
            <p>Escribe tus notas y se guardarán automáticamente en el almacenamiento local.</p>
            <Button className="w-full px-6 h-[40px] flex flex-row items-center gap-4" onClick={handleRefresh}>
                <RefreshIcon /> Recargar la página    
            </Button> 
          </motion.section>
          <motion.div
            className="w-full mx-auto flex flex-col gap-4 max-w-[400px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full h-40 mb-4"
              placeholder="Empieza a escribir tu nota..."
            />
            <p className="text-sm text-gray-600">
              {lastSaved
                ? `Último guardado: ${lastSaved.toLocaleTimeString()}`
                : 'Aún no se ha guardado'}
            </p>
          </motion.div>
        </CardContent>
      </Card>
    );
  };