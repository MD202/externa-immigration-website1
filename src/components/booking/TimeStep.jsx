import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';

export default function TimeStep({ data, setData }) {
  const { t } = useLanguage();
  const today = new Date().toISOString().split('T')[0];
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const serviceName = data.service_tier === 'quick_question' ? t('booking.tier1Label') : data.service_tier === 'full_consultation' ? t('booking.tier2Label') : t('booking.tier3Label');
  const serviceDuration = data.service_tier === 'quick_question' ? t('booking.tier1Duration') : data.service_tier === 'full_consultation' ? t('booking.tier2Duration') : t('booking.tier3Duration');

  useEffect(() => {
    if (!data.preferred_date) { setSlots([]); return; }
    setLoading(true);
    setData((d) => ({ ...d, preferred_time: '' }));
    base44.functions.invoke('getCalendarAvailability', { date: data.preferred_date })
      .then((res) => setSlots(res.data.slots || []))
      .catch(() => setSlots([]))
      .finally(() => setLoading(false));
  }, [data.preferred_date]);

  return (
    <div>
      <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('bookingFlow.selectTime')}</h2>
      <p className="mt-2 text-sm text-[#1E2A4A]/50">{serviceName}, {serviceDuration}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="intake-label">{t('bookingFlow.selectDate')}
          <input type="date" min={today} value={data.preferred_date} onChange={(e) => setData((d) => ({ ...d, preferred_date: e.target.value }))} className="intake-input" />
        </label>
        <div className="intake-label">{t('bookingFlow.selectTimeLabel')}
          {loading ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-[#1E2A4A]/50"><Loader2 className="h-4 w-4 animate-spin" /> {t('bookingFlow.loadingSlots')}</p>
          ) : data.preferred_date ? (
            slots.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {slots.map((time) => (
                  <button key={time} type="button" onClick={() => setData((d) => ({ ...d, preferred_time: time }))} className={`border px-3 py-2 text-sm transition ${data.preferred_time === time ? 'border-[#B8860B] bg-[#B8860B] text-[#FFFFFF]' : 'border-[#1E2A4A]/20 text-[#1E2A4A]/70 hover:border-[#B8860B]'}`}>{time}</button>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-[#1E2A4A]/50">{t('bookingFlow.noSlots')}</p>
            )
          ) : (
            <p className="mt-3 text-sm text-[#1E2A4A]/40">{t('bookingFlow.pickDate')}</p>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-[#1E2A4A]/40">{t('bookingFlow.timeZone')}</p>
    </div>
  );
}