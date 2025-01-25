export default function Header() {
     return (
          <div className="border-8 border-black p-12 bg-white relative overflow-hidden">
               <div className="relative z-10">
                    <h1 className="text-7xl font-bold uppercase font-mono mb-6">
                         Welcome to NazareAI
                    </h1>
                    <div className="font-mono space-y-4 mb-8 max-w-3xl">
                         <p className="text-3xl">
                              THE FUTURE OF AI AND BLOCKCHAIN TECHNOLOGY
                         </p>
                         <p className="text-xl text-gray-700 uppercase">
                              Research. Development. Innovation.
                         </p>
                    </div>
               </div>
               <div className="absolute right-0 top-0 w-1/3 h-full border-l-8 border-black bg-neutral-100"></div>
          </div>
     );
}
