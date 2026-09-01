import { CreditCard, Clock, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PaymentStep({ data, saving, onPayNow, onPayLater }) {
  const { t } = useLanguage();
  const today = new Date().toISOString().split('T')[0];

  const serviceName = data.service_tier === 'quick_question' ? t('booking.tier1Label') : data.service_tier === 'full_consultation' ? t('booking.tier2Label') : t('booking.tier3Label');
  const serviceDuration = data.service_tier === 'quick_question' ? t('booking.tier1Duration') : data.service_tier === 'full_consultation' ? t('booking.tier2Duration') : t('booking.tier3Duration');
  const servicePrice = data.service_tier === 'quick_question' ? t('booking.tier1Price') : data.service_tier === 'full_consultation' ? t('booking.tier2Price') : t('booking.tier3Price');

  return (
    <div>
      <h2 className="font-heading text-2xl text-[#0F2433]">{t('bookingFlow.paymentTitle')}</h2>

      <div className="mt-6 bg-[#F4F7F9] p-5">
        <p className="font-semibold text-[#0F2433]">{serviceName} ({serviceDuration}) — {data.preferred_date} at {data.preferred_time}</p>
        <p className="mt-1 text-[#0F2433]/60">{servicePrice} + HST</p>
        <p className="mt-2 flex items-center gap-2 text-xs text-[#0F2433]/45">
          <Lock className="h-3 w-3" />
          {t('bookingFlow.agreementSigned').replace('{name}', data.signature_name || '—').replace('{date}', today)}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="border border-[#0F2433]/15 p-6">
          <div className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-[#0F2433]" />
            <h3 className="font-heading text-lg text-[#0F2433]">{t('bookingFlow.payNow')}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#0F2433]/60">{t('bookingFlow.payNowDesc')}</p>
          <button disabled={saving} onClick={onPayNow} className="mt-6 w-full bg-[#C8102E] py-4 font-semibold text-white transition hover:bg-[#A00D24] disabled:opacity-40">
            {saving ? t('bookingFlow.sending') : t('bookingFlow.payNow')}
          </button>
        </div>

        <div className="border border-[#0F2433]/15 p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-[#0F2433]" />
            <h3 className="font-heading text-lg text-[#0F2433]">{t('bookingFlow.payLater')}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#0F2433]/60">{t('bookingFlow.payLaterDesc')}</p>
          <button disabled={saving} onClick={onPayLater} className="mt-4 w-full border-2 border-[#0F2433] py-4 font-semibold text-[#0F2433] transition hover:bg-[#0F2433] hover:text-white disabled:opacity-40">
            {saving ? t('bookingFlow.sending') : t('bookingFlow.payLaterButton')}
          </button>
        </div>
      </div>
    </div>
  );
}