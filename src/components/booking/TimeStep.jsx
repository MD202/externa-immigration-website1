import { Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TimeStep({ data, setData }) {
  const { t } = useLanguage();
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
  const today = new Date().toISOString().split('T')[0];

  const serviceName = data.service_tier === 'quick_question' ? t('booking.tier1Label') : data.service_tier === 'full_consultation' ? t('booking.tier2Label') : t('booking.tier3Label');
  const serviceDuration = data.service_tier === 'quick_question' ? t('booking.tier1Duration') : data.service_tier === 'full_consultation' ? t('booking.tier2Duration') : t('booking.tier3Duration');

  return (
    <div>
      <h2 className="font-heading text-2xl text-[#0F2433]">{t('bookingFlow.selectTime')}</h2>
      <p className="mt-2 text-sm text-[#0F2433]/50">{serviceName} — {serviceDuration}</p>

      <div className="mt-6 border border-dashed border-[#0F2433]/20 bg-[#F9F9F9] p-8 text-center">
        <Calendar className="mx-auto h-8 w-8 text-[#0F2433]/40" />
        <p className="mt-3 font-heading text-lg text-[#0F2433]">{t('bookingFlow.calendarPlaceholder')}</p>
        <p className="mt-1 text-sm text-[#0F2433]/50">{t('bookingFlow.calendarNote')}</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="intake-label">{t('bookingFlow.selectDate')}
          <input type="date" min={today} value={data.preferred_date} onChange={(e) => setData((d) => ({ ...d, preferred_date: e.target.value }))} className="intake-input" />
        </label>
        <label className="intake-label">{t('bookingFlow.selectTimeLabel')}
          <select value={data.preferred_time} onChange={(e) => setData((d) => ({ ...d, preferred_time: e.target.value }))} className="intake-input">
            <option value="">—</option>
            {times.map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
        </label>
      </div>

      <p className="mt-4 text-xs text-[#0F2433]/40">{t('bookingFlow.timeZone')}</p>
    </div>
  );
}