import type { Route } from "./+types/home";
import About from "./components/about";
import Bot from "./components/bot";
import Header from "./components/header";
import RoadMap from "./components/roadmap";
import Token from "./components/token";
import Work from "./components/work";

export function meta({}: Route.MetaArgs) {
     return [
          { title: "NazareAI" },
          {
               name: "description",
               content: "Experience our automated AI responses on X (Twitter) through our bot account @0xroyce369. Responses starting with “nazareai bot:” are AI-generated."
          }
     ];
}

export default function Home() {
     return (
          <main className="min-h-screen border-8 border-black">
               <div className="min-h-screen flex flex-col p-8">
                    <div className="flex flex-col gap-8 mb-16">
                         <Header />
                         <About />
                         <Token />
                    </div>
                    <Work />
                    <div className="flex flex-col gap-12 mt-16">
                         <Bot />
                         <RoadMap />
                    </div>
               </div>
          </main>
     );
}
