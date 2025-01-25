export default function Token() {
     return (
          <div className="border-4 border-black p-12 bg-white">
               <h2 className="text-3xl font-bold uppercase font-mono mb-6 border-b-4 border-black pb-2">
                    NazareAI Token
               </h2>
               <div className="grid md:grid-cols-2 gap-12 font-mono">
                    <div className="space-y-6">
                         <p className="text-xl">
                              Our ecosystem is powered by the NazareAI token,
                              driving the future of AI and blockchain
                              integration.
                         </p>
                         <div className="space-y-4">
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        Fueling AI research and development
                                   </span>
                              </div>
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        Supporting our AI workforce platform
                                   </span>
                              </div>
                              <div className="flex items-start gap-4">
                                   <span className="w-6 h-6 bg-black flex-shrink-0 mt-1"></span>
                                   <span className="text-lg">
                                        Powering crypto AI search capabilities
                                   </span>
                              </div>
                         </div>
                    </div>
                    <div className="border-4 border-black p-4">
                         <div className="flex justify-between items-center border-b-2 border-black pb-2">
                              <span className="uppercase">Token Address</span>
                              <span className="text-sm break-all">
                                   5qmykKi3zkM1sGvcMNgj4bqy68qvpLqR9fQWWrtfpump
                              </span>
                         </div>
                         <div className="flex justify-between items-center border-b-2 border-black pb-2">
                              <span className="uppercase">Network</span>
                              <span>Solana</span>
                         </div>
                         <div className="flex justify-between items-center">
                              <span className="uppercase">Type</span>
                              <span>SPL Token</span>
                         </div>
                    </div>
               </div>
               <a
                    href="https://dexscreener.com/solana/5qmykKi3zkM1sGvcMNgj4bqy68qvpLqR9fQWWrtfpump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block text-center px-6 py-3 bg-white border-4 font-mono border-black uppercase text-sm hover:bg-black hover:text-white transition-colors"
               >
                    View on DexScreener →
               </a>
          </div>
     );
}
