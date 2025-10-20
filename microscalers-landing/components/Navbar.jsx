export default function Navbar() {
  return (
    <nav className="w-full border-b border-microscale-green/20 bg-black/30 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-microscale-green shadow-[0_0_10px] shadow-microscale-green/70"></span>
          <span className="text-microscale-green text-sm">MICROSCALE OPS_</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#traits" className="text-gray-300 hover:text-microscale-green">Traits</a>
          <a href="#stack" className="text-gray-300 hover:text-microscale-green">Stack</a>
          <a href="#verify" className="text-gray-300 hover:text-microscale-green">Verify</a>
        </div>
      </div>
    </nav>
  );
}
