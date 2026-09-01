import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServiceStep({ data, setData }) {
  const { t } = useLanguage();
  const services = [
    { id: 'quick_question', label: t('booking.tier1Label'), duration: t('booking.tier1Duration'), price: t('booking.tier1Price'), desc: t('booking.tier1Desc') },
    { id: 'full_consultation', label: t('booking.tier2Label'), duration: t('booking.tier2Duration'), price: t('booking.tier2Price'), desc: t('booking.tier2Desc'), badge: t('booking.tier2Badge') },
    { id: 'application_review', label: t('booking.tier3Label'), duration: t('booking.tier3Duration'), price: t('booking.tier3Price'), desc: t('booking.tier3Desc') },
  ];
  return (
    <div>
      <h2 className="font-heading text-2xl text-[#123B2C]">{t('bookingFlow.selectService')}</h2>
      <div className="mt-6 grid gap-4">
        {services.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setData((d) => ({ ...d, service_tier: s.id }))}
            className={`relative border p-6 text-left transition ${data.service_tier === s.id ? 'border-[#C9A227] bg-[#C9A227]/5' : 'border-[#123B2C]/15 hover:border-[#123B2C]/40'}`}
          >
            {s.badge && <span className="absolute -top-3 left-6 bg-[#C9A227] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#123B2C]">{s.badge}</span>}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl text-[#123B2C]">{s.label} <span className="text-sm font-normal text-[#123B2C]/50">({s.duration})</span></h3>
                <p className="mt-2 text-sm leading-relaxed text-[#123B2C]/60">{s.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-heading text-2xl text-[#C9A227]">{s.price}</span>
                {data.service_tier === s.id && <Check className="h-5 w-5 text-[#C9A227]" />}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}