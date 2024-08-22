import { Card } from "./ui/card"
import { AnimateView } from "./AnimateView"

// Component that displays a simple card with a hello world message
export const HelloWorld = ()=> {
    return (
        <AnimateView>
            <Card className="p-6">
                <p className='text-gray-800'>Hola mundo!</p>
            </Card>
        </AnimateView>
    )
}