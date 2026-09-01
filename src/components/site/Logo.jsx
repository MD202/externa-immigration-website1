const LOGO_DEFAULT = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/8af61de3d_2.svg';
const LOGO_LIGHT = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/3f49b6ecd_7.svg';

export default function Logo({ className = 'h-9 w-9', variant = 'default' }) {
  const src = variant === 'light' ? LOGO_LIGHT : LOGO_DEFAULT;
  return (
    <img
      src={src}
      alt="Externa Immigration Solutions Inc"
      className={className}
      aria-hidden="true"
    />
  );
}