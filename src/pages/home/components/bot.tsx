export default function Bot() {
     return (
          <div className="border-4 border-black p-12 bg-white text-black">
               <h2 className="text-3xl font-bold uppercase font-mono mb-6 border-b-4 border-black pb-2">
                    NazareAI X Bot
               </h2>
               <div className="grid md:grid-cols-2 gap-12 font-mono">
                    <div className="space-y-6">
                         <p className="text-xl">
                              Experience our automated AI responses on X
                              (Twitter) through our bot account @0xroyce369.
                              Responses starting with “nazareai bot:” are
                              AI-generated.
                         </p>
                         <div className="space-y-4">
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        Automated responses to your queries
                                   </span>
                              </div>
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        24/7 AI-powered engagement
                                   </span>
                              </div>
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        Real-time blockchain and AI insights
                                   </span>
                              </div>
                         </div>
                    </div>
                    <div className="border-4 border-black p-6 bg-neutral-50">
                         <h3 className="text-xl font-bold uppercase mb-4">
                              Terms &amp; Disclaimers
                         </h3>
                         <div className="space-y-4 text-sm">
                              <p>
                                   By interacting with the NazareAI X Bot
                                   (@0xroyce369), you acknowledge and agree to
                                   the following:
                              </p>
                              <ul className="space-y-3">
                                   <li className="flex items-start gap-3">
                                        <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                        <span>
                                             “nazareai bot:” are automated and
                                             AI-generated
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3">
                                        <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                        <span>
                                             NazareAI is not responsible for the
                                             accuracy, completeness, or
                                             reliability of any AI-generated
                                             responses
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3">
                                        <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                        <span>
                                             The bot's responses should not be
                                             considered as financial, legal, or
                                             professional advice
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3">
                                        <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                        <span>
                                             We reserve the right to modify or
                                             discontinue the bot service at any
                                             time
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3">
                                        <span className="w-4 h-4 bg-black flex-shrink-0 mt-1"></span>
                                        <span>
                                             Users are responsible for their own
                                             actions taken based on bot
                                             responses
                                        </span>
                                   </li>
                              </ul>
                         </div>
                         <div className="mt-6">
                              <a
                                   href="https://twitter.com/0xroyce369"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-block px-6 py-3 bg-white border-4 border-black font-mono uppercase text-sm hover:bg-black hover:text-white transition-colors"
                              >
                                   Follow @0xroyce369 →
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
}
