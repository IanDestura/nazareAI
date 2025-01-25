export default function CardRoadMap(props: { [key: string]: any }) {
     return (
          <div className="border-4 border-black p-6">
               <div className="bg-black text-white p-4 -mx-2 -mt-2 mb-6">
                    <h3 className="text-xl font-bold mb-1">{props.id}</h3>
                    <p className="text-sm">{props.title}</p>
               </div>
               <ul className="space-y-4">
                    {props.list.map((list: string, index: number) => {
                         return (
                              <li className="flex items-start gap-3">
                                   <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                   <span>
                                        { list }
                                   </span>
                              </li>
                         );
                    })}
               </ul>
          </div>
     );
}
