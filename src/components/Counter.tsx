import { useMemo, useState } from "react";
import { Card } from "./ui/card"
import { H1, H3 } from "./ui/typographies"
import { Button } from "./ui/button";
import { MinusSignIcon, PlusSignIcon } from "hugeicons-react";
import { AnimateView } from "./AnimateView";

/**
 * Component that displays a counter that can be incremented or decremented.
 */
export const Counter = () => {
    //State declaration
    const [counter, setCounter] = useState(0);

    //Handler to increment the counter
    const handleIncrement = () => setCounter(counter + 1);

    //Memoized value to determine if the counter can be decremented
    const canDecrement = useMemo(() => counter > 0, [counter]);
    
    //Handler to decrement the counter
    const handleDecrement = () => canDecrement && setCounter(counter - 1);

    return (
        <AnimateView>
            <Card className="flex flex-col items-start gap-6 p-6">
                <H3>Contador:</H3>
                <section className="flex flex-col md:flex-row items-center gap-6 ">
                    <Button onClick={handleDecrement} disabled={!canDecrement} className="hidden md:block">
                        <MinusSignIcon className="w-6 h-6" />
                    </Button>
                    <div className="min-w-[200px] md:text-center">
                        {counter === 0 ? "Presiona para incrementar" : counter}
                    </div>
                    <section className="flex flex-row items-center justify-start gap-6 w-full">
                        <Button onClick={handleDecrement} disabled={!canDecrement} className="block md:hidden">
                            <MinusSignIcon className="w-6 h-6" />
                        </Button>
                        <Button onClick={handleIncrement}>
                            <PlusSignIcon className="w-6 h-6" />
                        </Button>
                    </section>
                </section>
            </Card>
        </AnimateView>
    )
}