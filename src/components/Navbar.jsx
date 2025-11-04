export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#" className="text-lg font-semibold tracking-tight text-gray-900">digilary</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800">Start a project</a>
        </div>
      </div>
    </header>
  );
}
