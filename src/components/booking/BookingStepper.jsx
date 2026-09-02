import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function BookingStepper({ step }) {
  const { t } = useLanguage();
  const steps = [
    { n: 1, label: t('bookingFlow.step1') },
    { n: 2, label: t('bookingFlow.step2') },
    { n: 3, label: t('bookingFlow.step3') },
  ];
  return (
    <div className="mt-8 mb-8">
      <div className="flex items-start">
        {steps.map((s, i) => (
          <div key={s.n} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition ${
                step > s.n ? 'border-[#047857] bg-[#047857] text-[#FFFFFF]' :
                step === s.n ? 'border-[#047857] bg-white text-[#047857]' :
                'border-[#1E293B]/20 bg-white text-[#1E293B]/40'
              }`}>
                {step > s.n ? <Check className="h-4 w-4" /> : s.n}
              </div>
              <span className={`mt-2 text-center text-xs ${step >= s.n ? 'text-[#1E293B]' : 'text-[#1E293B]/40'}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className={`mx-2 mt-4 h-px flex-1 ${step > s.n ? 'bg-[#047857]' : 'bg-[#1E293B]/15'}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}