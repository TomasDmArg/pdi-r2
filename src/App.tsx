import { H1 } from "./components/ui/typographies";
import { HelloWorld } from "./components/HelloWorld";

import './App.css';
import { PresentationCard } from "./components/PresentationCard";
import { Counter } from "./components/Counter";
import { TaskList } from "./components/TaskList/TaskList";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <main className='p-12 flex flex-col gap-6'>
      <H1>Inicio - R1</H1>
      <HelloWorld />
      <PresentationCard />
      <Counter />
      <TaskList />
      <Form />
    </main>
  );
}

export default App;
