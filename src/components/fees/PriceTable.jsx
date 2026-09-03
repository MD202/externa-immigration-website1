// Reusable pricing table for commodity/anchor/business service rows.
// rows: [{ service, full, guided, review, bench? }]
export default function PriceTable({ rows, showBenchmark = false, note }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[560px]">
          <thead>
            <tr className="border-b border-[#1E2A4A]/15">
              <th className="py-4 pr-4 text-left text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/50">Service</th>
              <th className="bg-[#1E2A4A]/[.03] px-3 py-4 text-center text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]">Full</th>
              <th className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/55">Guided</th>
              <th className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/55">Review</th>
              {showBenchmark && <th className="py-4 pl-3 text-right text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/35">Their Full</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
                <td className="py-4 pr-4 text-sm leading-relaxed text-[#1E2A4A]/80">{r.service}</td>
                <td className="bg-[#1E2A4A]/[.03] px-3 py-4 text-center text-sm font-semibold text-[#1E2A4A]">{r.full}</td>
                <td className="px-3 py-4 text-center text-sm text-[#1E2A4A]/65">{r.guided || '—'}</td>
                <td className="px-3 py-4 text-center text-sm text-[#1E2A4A]/65">{r.review || '—'}</td>
                {showBenchmark && <td className="py-4 pl-3 text-right text-sm italic text-[#1E2A4A]/40">{r.bench || '—'}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-4 text-sm italic leading-relaxed text-[#1E2A4A]/45">{note}</p>}
    </div>
  );
}