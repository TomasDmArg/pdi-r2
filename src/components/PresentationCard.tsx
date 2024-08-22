import { Card } from "./ui/card"
import { H3, P } from "./ui/typographies";
import { AnimateView } from "./AnimateView";

// Component that displays a card with an example card
export const PresentationCard = () => {
    const PLACEHOLDER_URL = "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg";

    return (
        <AnimateView>
            <Card className="flex flex-row items-center gap-6 p-6">
                <img
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                    src={PLACEHOLDER_URL}
                    alt="Placeholder de un usuario" 
                />
                <section className="flex flex-col gap-0">
                    <H3>John Doe</H3>
                    <P>Programador full stack</P>
                </section>
            </Card>
        </AnimateView>
    )
}