export default function CardWork(props:{ [key: string]: any }) {
     return (
          <div
               key={props.id}
               className="border-4 border-white p-8 bg-black text-white hover:transform hover:-translate-y-2 transition-transform duration-300"
          >
               <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white flex items-center justify-center">
                         <span className="text-black font-mono font-bold text-2xl">
                              {props.id}
                         </span>
                    </div>
                    <h3 className="text-2xl font-bold uppercase font-mono">
                         {props.title}
                    </h3>
               </div>
               <ul className="space-y-4 font-mono">
                    {props.list.map((list: string, index: number) => {
                         return (
                              <li
                                   key={index}
                                   className="flex items-start gap-3"
                              >
                                   <span className="w-4 h-4 bg-white flex-shrink-0 mt-1"></span>
                                   {list}
                              </li>
                         );
                    })}
               </ul>
               <div className="mt-8">
                    <a
                         href={props.button.link}
                         target={
                              props.button.attr != null
                                   ? props.button.attr.target
                                   : null
                         }
                         rel={
                              props.button.attr != null
                                   ? props.button.attr.rel
                                   : null
                         }
                         className="inline-block px-6 py-3 bg-black border-4 border-white font-mono uppercase text-sm hover:bg-white hover:text-black transition-colors"
                    >
                         {props.button.title} →
                    </a>
               </div>
          </div>
          // <div className="border-4 border-white p-8 bg-black text-white hover:transform hover:-translate-y-2 transition-transform duration-300">
          //      <div className="flex items-center gap-4 mb-6">
          //           <div className="w-16 h-16 bg-white flex items-center justify-center">
          //                <span className="text-black font-mono font-bold text-2xl">
          //                     01
          //                </span>
          //           </div>
          //           <h3 className="text-2xl font-bold uppercase font-mono">
          //                AI Workforce Platform
          //           </h3>
          //      </div>
          //      <ul className="space-y-4 font-mono">
          //           <li className="flex items-start gap-3">
          //                <span className="w-4 h-4 bg-white flex-shrink-0 mt-1"></span>
          //                Specialized AI agents that revolutionize workplace
          //                efficiency
          //           </li>
          //           <li className="flex items-start gap-3">
          //                <span className="w-4 h-4 bg-white flex-shrink-0 mt-1"></span>
          //                Integration with email, Slack, Teams, and other
          //                platforms
          //           </li>
          //           <li className="flex items-start gap-3">
          //                <span className="w-4 h-4 bg-white flex-shrink-0 mt-1"></span>
          //                Demo LLM agent: Senior Marketing Strategist - Available
          //                Now
          //           </li>
          //      </ul>
          //      <div className="mt-8">
          //           <a
          //                href="/senior-marketing-strategist-demo"
          //                className="inline-block px-6 py-3 bg-black border-4 border-white font-mono uppercase text-sm hover:bg-white hover:text-black transition-colors"
          //           >
          //                Try Demo →
          //           </a>
          //      </div>
          // </div>
     );
}
