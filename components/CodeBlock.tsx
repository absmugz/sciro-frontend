export default function CodeBlock() {
  const code = `import { Sciro } from "@sciro/sdk"
Sciro.track("video_rewind")
Sciro.track("answer_submitted", { correct: false, ms: 24000 })
Sciro.onInsight(({ learner_state, action }) => { ... })`;
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-xl p-5 font-mono text-sm text-gray-200 overflow-x-auto">
      <pre className="whitespace-pre">{code}</pre>
    </div>
  );
}
