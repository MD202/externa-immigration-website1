import { Check } from 'lucide-react';

function Cell({ v }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-[#B8860B]" strokeWidth={2.5} />;
  if (v === false) return <span className="text-white/30">, </span>;
  return <span className="text-sm text-white/85">{v}</span>;
}

export default function ServiceMatrix({ matrix }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/15 text-left">
            <th className="py-3 pr-4 font-heading font-medium text-white/90">What&apos;s included</th>
            <th className="px-3 py-3 text-center font-heading font-medium text-[#B8860B]">Full</th>
            <th className="px-3 py-3 text-center font-heading font-medium text-white/70">DIY</th>
            <th className="px-3 py-3 text-center font-heading font-medium text-white/70">Review</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i} className="border-b border-white/10">
              <td className="py-3 pr-4 text-white/80">{row.label}</td>
              <td className="px-3 py-3 text-center"><Cell v={row.full} /></td>
              <td className="px-3 py-3 text-center"><Cell v={row.diy} /></td>
              <td className="px-3 py-3 text-center"><Cell v={row.review} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}