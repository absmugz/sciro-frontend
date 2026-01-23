interface HowItWorksStepProps {
  n: number;
  title: string;
  desc: string;
}

export default function HowItWorksStep(props: { n: number; title: string; desc: string }) {
  const { n, title, desc } = props;
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="w-8 h-8 rounded-full bg-indigo-700/80 flex items-center justify-center text-white font-bold mb-1">{n}</div>
      <div className="font-semibold text-white">{title}</div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </div>
  );
}
