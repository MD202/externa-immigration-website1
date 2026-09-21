import { Image } from '@/components/ui/image';

// Full-bleed image with a gradient overlay and caption — adds visual weight to a landing page.
export default function LandingImageBand({ src, alt, caption, overlay = 'from-[#123B35]/85' }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image src={src} alt={alt} fittingType="fill" className="h-full w-full" />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlay} to-transparent`} />
        <div className="absolute inset-0 flex items-end p-8 lg:p-16">
          <p className="max-w-xl font-heading text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">{caption}</p>
        </div>
      </div>
    </section>
  );
}