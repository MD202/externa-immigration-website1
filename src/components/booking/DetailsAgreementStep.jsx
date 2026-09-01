import { CreditCard, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function DetailsAgreementStep({ data, setData, saving, onPayNow, onPayLater }) {
  const { t } = useLanguage();
  const field = (key) => (e) => setData((d) => ({ ...d, [key]: e.target.value }));
  const today = new Date().toISOString().split('T')[0];
  const detailsValid = !!(data.full_name && data.email && data.agreement_accepted && data.signature_name);

  const matters = [
    { value: 'Appeal or refusal', label: t('strategy.m1') },
    { value: 'Family sponsorship', label: t('strategy.m2') },
    { value: 'Humanitarian and compassionate', label: t('strategy.m3') },
    { value: 'Entrepreneurship', label: t('strategy.m4') },
    { value: 'Permanent residence or PNP', label: t('strategy.m5') },
    { value: 'PR card or citizenship', label: t('strategy.m6') },
    { value: 'Other (permits & visas)', label: t('strategy.m7') },
    { value: 'Refugee claim', label: t('strategy.m8') },
    { value: 'Employer', label: t('strategy.m9') },
  ];
  const urgency = [
    { value: 'Deadline within 7 days', label: t('strategy.u1') },
    { value: 'Deadline within 30 days', label: t('strategy.u2') },
    { value: 'No immediate deadline', label: t('strategy.u3') },
    { value: 'Not sure', label: t('strategy.u4') },
  ];

  return (
    <div>
      <h2 className="font-heading text-2xl text-[#0F2433]">{t('bookingFlow.detailsTitle')}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="intake-label">{t('strategy.fullName')}
          <input required value={data.full_name} onChange={field('full_name')} className="intake-input" />
        </label>
        <label className="intake-label">{t('strategy.email')}
          <input required type="email" value={data.email} onChange={field('email')} className="intake-input" />
        </label>
        <label className="intake-label">{t('strategy.phoneOpt')}
          <input value={data.phone} onChange={field('phone')} className="intake-input" />
        </label>
        <label className="intake-label">{t('bookingFlow.matter')}
          <select value={data.matter} onChange={field('matter')} className="intake-input">
            <option value="">—</option>
            {matters.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </label>
        <label className="intake-label sm:col-span-2">{t('bookingFlow.urgency')}
          <select value={data.urgency} onChange={field('urgency')} className="intake-input">
            <option value="">—</option>
            {urgency.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </label>
        <label className="intake-label sm:col-span-2">{t('strategy.summaryOpt')}
          <textarea rows="3" value={data.summary} onChange={field('summary')} className="intake-input resize-none" />
        </label>
      </div>

      <div className="mt-8">
        <h3 className="font-heading text-xl text-[#0F2433]">{t('bookingFlow.agreementTitle')}</h3>
        <div className="mt-4 max-h-64 overflow-y-auto border border-[#0F2433]/10 bg-[#F4F7F9] p-6 text-sm leading-relaxed text-[#0F2433]/70">
          <p className="font-semibold text-[#0F2433]">{t('bookingFlow.agreementWhoWeAre')}</p>
          <p className="mt-1 whitespace-pre-line">{t('bookingFlow.agreementWhoWeAreBody')}</p>
          <p className="mt-4 font-semibold text-[#0F2433]">{t('bookingFlow.agreementCost')}</p>
          <p className="mt-1">{t('bookingFlow.agreementCostBody')}</p>
          <p className="mt-4 font-semibold text-[#0F2433]">{t('bookingFlow.agreementRegulator')}</p>
          <p className="mt-1">{t('bookingFlow.agreementRegulatorBody')}</p>
          <p className="mt-4 font-semibold text-[#0F2433]">{t('bookingFlow.agreementScope')}</p>
          <p className="mt-1">{t('bookingFlow.agreementScopeCovers')}</p>
          <p className="mt-1">{t('bookingFlow.agreementScopeNotCover')}</p>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="intake-label">{t('bookingFlow.signLabel')}
            <input value={data.signature_name} onChange={field('signature_name')} className="intake-input" />
          </label>
          <label className="intake-label">{t('bookingFlow.dateLabel')}
            <input type="date" value={today} readOnly className="intake-input" />
          </label>
        </div>

        <label className="mt-5 flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={data.agreement_accepted} onChange={(e) => setData((d) => ({ ...d, agreement_accepted: e.target.checked }))} className="mt-1 h-5 w-5 accent-[#0F2433]" />
          <span className="text-sm text-[#0F2433]/70">{t('bookingFlow.agreeCheckbox')}</span>
        </label>
      </div>

      <div className="mt-8 border-t border-[#0F2433]/10 pt-8">
        <h3 className="font-heading text-xl text-[#0F2433]">{t('bookingFlow.paymentTitle')}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="border border-[#0F2433]/15 p-6">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-[#0F2433]" />
              <h4 className="font-heading text-lg text-[#0F2433]">{t('bookingFlow.payNow')}</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#0F2433]/60">{t('bookingFlow.payNowDesc')}</p>
            <button type="button" disabled={saving || !detailsValid} onClick={onPayNow} className="mt-6 w-full bg-[#C8102E] py-4 font-semibold text-white transition hover:bg-[#A00D24] disabled:opacity-40">
              {saving ? t('bookingFlow.sending') : t('bookingFlow.payNow')}
            </button>
          </div>
          <div className="border border-[#0F2433]/15 p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-[#0F2433]" />
              <h4 className="font-heading text-lg text-[#0F2433]">{t('bookingFlow.payLater')}</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#0F2433]/60">{t('bookingFlow.payLaterDesc')}</p>
            <button type="button" disabled={saving || !detailsValid} onClick={onPayLater} className="mt-6 w-full border-2 border-[#0F2433] py-4 font-semibold text-[#0F2433] transition hover:bg-[#0F2433] hover:text-white disabled:opacity-40">
              {saving ? t('bookingFlow.sending') : t('bookingFlow.payLaterButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}