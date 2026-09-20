import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServiceStep({ data, setData }) {
  const { t } = useLanguage();
  const services = [
    { id: 'quick_question', label: 'Quick sync', duration: '15 minutes', price: '$50', desc: 'One specific question.' },
    { id: 'full_consultation', label: 'Full consultation', duration: '60 minutes', price: '$175', desc: 'A full assessment and a written summary afterward. Credited in full toward any package if you retain us within 15 days.', badge: 'Most people start here' },
  ];
  return (
    <div>
      <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('bookingFlow.selectService')}</h2>
      <div className="mt-6 grid gap-4">
        {services.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setData((d) => ({ ...d, service_tier: s.id }))}
            className={`relative border p-6 text-left transition ${data.service_tier === s.id ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-[#1E2A4A]/15 hover:border-[#1E2A4A]/40'}`}
          >
            {s.badge && <span className="absolute -top-3 left-6 bg-[#B8860B] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">{s.badge}</span>}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl text-[#1E2A4A]">{s.label} {s.duration && <span className="text-sm font-normal text-[#1E2A4A]/50">({s.duration})</span>}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/60">{s.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-heading text-2xl text-[#B8860B]">{s.price}</span>
                {data.service_tier === s.id && <Check className="h-5 w-5 text-[#B8860B]" />}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}