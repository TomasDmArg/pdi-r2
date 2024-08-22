# PDI: Inicio - R1

## Descripción

Este es un trabajo práctico realizado en el marco de la materia Proyecto Diseño e Implementación, de la EEST N°5 "Amancio Williams". El proyecto consiste en una serie de componentes React que demuestran conceptos fundamentales de desarrollo frontend.

## Requisitos previos

- [Bun](https://bun.sh/) instalado en tu sistema

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/pdi-inicio-r1.git
   cd pdi-inicio-r1
   ```

2. Instala las dependencias:
   ```
   bun install
   ```

3. Inicia la aplicación:
   ```
   bun run dev
   ```

4. Abre tu navegador y visita `http://localhost:3000`

## Componentes

### 1. Hola mundo

- Ubicación: `src/components/HelloWorld.tsx`
- Descripción: Un componente simple que muestra "Hola, mundo!"

### 2. Tarjeta de presentación

- Ubicación: `src/components/PresentationCard.tsx`
- Descripción: Una tarjeta de presentación con información personal que usa datos de ejemplo

### 3. Contador

- Ubicación: `src/components/Counter.tsx`
- Descripción: Un contador interactivo

### 4. Lista de tareas

- Ubicación: `src/components/TodoList.tsx`
- Descripción: Una lista de tareas interactiva
- Características:
  - Agregar nuevas tareas
  - Marcar tareas como completadas
  - Utiliza un array en el estado para almacenar las tareas

### 5. Formulario simple

- Ubicación: `src/components/SimpleForm.tsx`
- Descripción: Un formulario para capturar el nombre del usuario
- Características:
  - Input para el nombre
  - Muestra un mensaje de bienvenida al enviar
  - Utiliza el estado para manejar el valor del input

## Comandos útiles

- `bun run dev`: Inicia el servidor de desarrollo
- `bun run build`: Construye la aplicación para producción
- `bun run lint`: Ejecuta el linter