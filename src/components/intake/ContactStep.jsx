import { useLanguage } from '@/lib/LanguageContext';

export default function ContactStep({ data, setData }) {
  const { t } = useLanguage();
  const field = (key, value) => setData((current) => ({ ...current, [key]: value }));
  return (
    <div>
      <h2 className="font-heading text-4xl leading-tight text-[#0E3B3B] sm:text-5xl">{t('strategy.s3')}</h2>
      <p className="mt-4 text-[#0E3B3B]/60">{t('strategy.s3sub')}</p>
      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <label className="intake-label">{t('strategy.fullName')}
          <input required value={data.full_name} onChange={(e) => field('full_name', e.target.value)} className="intake-input" />
        </label>
        <label className="intake-label">{t('strategy.email')}
          <input required type="email" value={data.email} onChange={(e) => field('email', e.target.value)} className="intake-input" />
        </label>
        <label className="intake-label sm:col-span-2">{t('strategy.phoneOpt')}
          <input value={data.phone} onChange={(e) => field('phone', e.target.value)} className="intake-input" />
        </label>
        <label className="intake-label sm:col-span-2">{t('strategy.summaryOpt')}
          <textarea rows="4" value={data.summary} onChange={(e) => field('summary', e.target.value)} className="intake-input resize-none" />
        </label>
      </div>
    </div>
  );
}