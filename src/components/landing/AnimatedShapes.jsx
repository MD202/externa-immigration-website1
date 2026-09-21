// Floating gradient orbs for an energetic, event-like feel. Purely decorative
// (aria-hidden) — sits behind hero content.
export default function AnimatedShapes({ colors = ['#00FF87', '#1E8A70', '#2DFF88'] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="float-glow absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: colors[0], animationDelay: '0s' }} />
      <div className="float-glow absolute right-[-6rem] top-1/4 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: colors[1], animationDelay: '2.5s' }} />
      <div className="float-glow absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: colors[2], animationDelay: '5s' }} />
    </div>
  );
}