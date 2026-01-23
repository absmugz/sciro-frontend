export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <span>© {new Date().getFullYear()} Sciro.ai</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-400 transition">Docs</a>
          <a href="#" className="hover:text-indigo-400 transition">Contact</a>
          <a href="#" className="hover:text-indigo-400 transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
