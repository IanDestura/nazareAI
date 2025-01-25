export default function About() {
     return (
          <div className="border-4 border-black p-12 bg-white text-black">
               <h2 className="text-3xl font-bold uppercase font-mono mb-6 border-b-4 border-black pb-2">
                    Who We Are
               </h2>
               <div className="font-mono space-y-6">
                    <p className="text-xl max-w-4xl">
                         NazareAI is a artificial intelligence and blockchain
                         research &amp; development company. We specialize in
                         creating innovative solutions that bridge the gap
                         between AI and blockchain technology.
                    </p>
                    <div className="grid md:grid-cols-3 gap-12 mt-8">
                         <div className="flex flex-col items-start">
                              <h3 className="text-lg font-bold uppercase mb-2">
                                   Research
                              </h3>
                              <p>
                                   Advancing the boundaries of AI and blockchain
                                   integration
                              </p>
                         </div>
                         <div className="flex flex-col items-start">
                              <h3 className="text-lg font-bold uppercase mb-2">
                                   Development
                              </h3>
                              <p>
                                   Building practical solutions for real-world
                                   applications
                              </p>
                         </div>
                         <div className="flex flex-col items-start">
                              <h3 className="text-lg font-bold uppercase mb-2">
                                   Innovation
                              </h3>
                              <p>
                                   Creating the next generation of AI-powered
                                   tools
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
