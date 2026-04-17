import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let animationId = 0;
    let lastShootingStar = 0;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density-based count
      const count = Math.floor((width * height) / 4000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        size: Math.random() * 1.2 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShootingStar = () => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.4;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      const speed = 6 + Math.random() * 4;
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 60 + Math.random() * 30,
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle nebula glow
      const gradient = ctx.createRadialGradient(
        width * 0.7,
        height * 0.3,
        0,
        width * 0.7,
        height * 0.3,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, "hsla(220, 90%, 50%, 0.05)");
      gradient.addColorStop(0.5, "hsla(260, 80%, 40%, 0.025)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.8,
        0,
        width * 0.2,
        height * 0.8,
        Math.max(width, height) * 0.5
      );
      gradient2.addColorStop(0, "hsla(197, 85%, 51%, 0.04)");
      gradient2.addColorStop(1, "transparent");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Stars
      for (const s of stars) {
        const twinkle =
          s.baseOpacity * (0.6 + 0.4 * Math.sin(t * s.twinkleSpeed + s.twinklePhase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${twinkle})`;
        ctx.fill();

        // Subtle glow for larger stars
        if (s.size > 1) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(197, 85%, 70%, ${twinkle * 0.15})`;
          ctx.fill();
        }
      }

      // Shooting stars
      if (t - lastShootingStar > 4000 + Math.random() * 4000) {
        spawnShootingStar();
        lastShootingStar = t;
      }

      shootingStars = shootingStars.filter((star) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life += 1;
        const opacity = Math.max(0, 1 - star.life / star.maxLife);

        const tailLength = 80;
        const grad = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.vx * (tailLength / 6),
          star.y - star.vy * (tailLength / 6)
        );
        grad.addColorStop(0, `hsla(0, 0%, 100%, ${opacity})`);
        grad.addColorStop(1, "hsla(197, 85%, 70%, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - star.vx * (tailLength / 6),
          star.y - star.vy * (tailLength / 6)
        );
        ctx.stroke();

        return star.life < star.maxLife;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
