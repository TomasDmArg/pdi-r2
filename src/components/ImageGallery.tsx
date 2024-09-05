import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { H2 } from "./ui/typographies";
import { motion } from "framer-motion";

/**
 * Interfaz para definir la estructura de una imagen
 */
interface Image {
  src: string;
  alt: string;
}

/**
 * Componente ImageGallery
 * 
 * Este componente renderiza una galería de imágenes utilizando un carrusel.
 * Las imágenes se muestran en un diseño responsivo y se pueden navegar
 * utilizando flechas o deslizando.
 * 
 * @returns {JSX.Element} El componente ImageGallery renderizado
 */
export const ImageGallery: React.FC = (): JSX.Element => {
    const images: Image[] = [
      {
        src: 'https://images.unsplash.com/photo-1494523637905-2c470e4312d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagen 1'
      },
      {
        src: 'https://images.unsplash.com/photo-1578224034523-731a25929abc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagen 2'
      },
      {
        src: 'https://images.unsplash.com/photo-1588903297322-51ba5c29f8cb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagen 3'
      },
      {
        src: 'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagen 4'
      }
    ];
  
    return (
      <Card className="w-full rounded-xl">
        <CardContent className="p-1 flex flex-col items-center justify-center gap-8 h-full py-10 min-h-[100vh]">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-2"
            >
                <H2>Galería de imágenes</H2>
                <p>Presione las flechas de izq o der, o deslice para ver todas las imágenes.</p>
            </motion.section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full min-h-[50vh] object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}   
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </CardContent>
      </Card>
    );
  };