import React from 'react';

import './App.css';
import { ImageGallery } from './components/ImageGallery';
import { DynamicForm } from './components/DynamicForm';
import { NumberGuessingGame } from './components/NumberGuessingGame';
import { ClickButtons } from './components/ClickButtons';
import { AutoSaveNotes } from './components/AutoSaveNotes';
import { H1 } from './components/ui/typographies';
import { Github01Icon } from 'hugeicons-react';
import { Button } from './components/ui/button';

/**
 * Componente principal de la aplicación
 * 
 * Este componente renderiza la estructura principal de la aplicación,
 * incluyendo un encabezado con el título y un botón para abrir el repositorio de GitHub,
 * así como varios componentes de ejemplo.
 * 
 * @returns {JSX.Element} El componente App renderizado
 */
const App: React.FC = (): JSX.Element => {

  /**
   * Maneja la apertura del repositorio de GitHub en una nueva pestaña
   */
  const handleOpenGitHub = (): void => {
    window.open("https://github.com/TomasDmArg/pdi-r2", "_blank");
  }

  return (
    <div className="">
      <section className='p-4 container mx-auto flex flex-row justify-between items-center'>
        <section>
          <H1>PDI - R2</H1>
          <p>Por: Tomas Di Mauro</p>
        </section>
        <Button onClick={handleOpenGitHub} variant={"secondary"}>
          <Github01Icon /> 
        </Button>
      </section>
      <section className='flex flex-col gap-10'>
        <ImageGallery />
        <DynamicForm />
        <NumberGuessingGame />
        <ClickButtons />
        <AutoSaveNotes />
      </section>
    </div>
  );
};

export default App;
