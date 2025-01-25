import work_list from "../../../constants/work.js";
import CardWork from "../../../components/card-work";

export default function Work() {
     return (
          <div className="py-24 -mx-8 px-8 bg-black border-y-8 border-black">
               <h2 className="text-5xl font-bold uppercase font-mono mb-12 text-center text-white">
                    Our Work
               </h2>
               <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                         {work_list.map((item: object) => {
                              return (
                                   <CardWork
                                        {...item}
                                   />
                              );
                         })}
                    </div>
               </div>
          </div>
     );
}
