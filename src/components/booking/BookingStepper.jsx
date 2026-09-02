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
                step > s.n ? 'border-[#B8860B] bg-[#B8860B] text-[#FFFFFF]' :
                step === s.n ? 'border-[#B8860B] bg-white text-[#B8860B]' :
                'border-[#1E2A4A]/20 bg-white text-[#1E2A4A]/40'
              }`}>
                {step > s.n ? <Check className="h-4 w-4" /> : s.n}
              </div>
              <span className={`mt-2 text-center text-xs ${step >= s.n ? 'text-[#1E2A4A]' : 'text-[#1E2A4A]/40'}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className={`mx-2 mt-4 h-px flex-1 ${step > s.n ? 'bg-[#B8860B]' : 'bg-[#1E2A4A]/15'}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}