export default function DemoMock() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 w-full max-w-lg mx-auto relative overflow-hidden">
      <div className="text-xs font-semibold text-gray-400 mb-2">Event stream</div>
      <ul className="flex gap-2 mb-4 flex-wrap">
        <li className="bg-white/10 px-2 py-1 rounded text-xs text-gray-200">video_pause</li>
        <li className="bg-white/10 px-2 py-1 rounded text-xs text-gray-200">video_rewind</li>
        <li className="bg-white/10 px-2 py-1 rounded text-xs text-gray-200">answer_wrong</li>
        <li className="bg-white/10 px-2 py-1 rounded text-xs text-gray-200">answer_wrong</li>
      </ul>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="bg-indigo-600/80 text-white text-xs px-2 py-1 rounded font-mono">Sciro Insight</span>
        <span className="text-xs text-gray-300">
          learner_state = <span className="font-semibold text-indigo-300">confused</span>
        </span>
        <span className="text-xs text-gray-400">confidence = 0.87</span>
      </div>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="bg-emerald-700/80 text-emerald-100 text-xs px-2 py-1 rounded font-mono">Suggested action</span>
        <span className="text-xs text-emerald-300 font-semibold">show_example</span>
      </div>
      <div className="flex items-center gap-4 pt-2 border-t border-white/10 flex-wrap">
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <svg width="12" height="12" fill="none" viewBox="0 0 12 12" className="inline-block">
            <path d="M6 10V2M6 2l-3 3M6 2l3 3" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          accuracy
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <svg width="12" height="12" fill="none" viewBox="0 0 12 12" className="inline-block">
            <path d="M6 2v8M6 10l-3-3M6 10l3-3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          time-to-answer
        </span>
      </div>
      <div className="absolute -inset-4 pointer-events-none">
        <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-2xl" />
      </div>
    </div>
  );
}
