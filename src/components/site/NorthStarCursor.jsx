import { useEffect, useState } from "react";

export default function NorthStarCursor() {
  const [points, setPoints] = useState([]);
  useEffect(() => {
    const move = (event) => setPoints((current) => [...current.slice(-5), { x: event.clientX, y: event.clientY, id: Date.now() }]);
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block" aria-hidden="true">
    {points.map((point, index) => <span key={point.id} className="absolute h-1 w-1 rounded-full bg-[#B8860B] transition-opacity" style={{ left: point.x, top: point.y, opacity: (index + 1) / 10 }} />)}
  </div>;
}