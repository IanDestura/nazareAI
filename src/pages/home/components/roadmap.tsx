import roadmap_list from "@constants/roadmap.js";
import CardRoadMap from "@components/card-road-map";

export default function RoadMap() {
     return (
          <div className="border-4 border-black p-12 bg-white">
               <h2 className="text-3xl font-bold uppercase font-mono mb-8 border-b-4 border-black pb-2">
                    Roadmap to Traction
               </h2>
               <div className="grid md:grid-cols-3 gap-8 font-mono">
                    {roadmap_list.map(
                         (item: { [key: string]: any }, key: number) => {
                              return <CardRoadMap {...item} />;
                         }
                    )}
               </div>
          </div>
     );
}
