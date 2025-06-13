import React, { ReactNode, useMemo } from "react";

interface LiquidGlassProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glassBlur?: number;
  cornerRadius?: number;
  edgeWidth?: number;
  edgeBlur?: number;
  isHovered?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = "",
  style = {},
  glassBlur = 10,
  cornerRadius = 30,
  edgeWidth = 15,
  edgeBlur = 2,
  isHovered = false,
  isActive = false,
  isDisabled = false,
}) => {
  const glassStyle = useMemo(
    () =>
      ({
        "--glass-blur": `${glassBlur}px`,
        "--corner-radius": `${cornerRadius}px`,
        "--edge-width": `${edgeWidth}px`,
        "--edge-blur": `${edgeBlur}px`,
        ...style,
      } as React.CSSProperties),
    [glassBlur, cornerRadius, edgeWidth, edgeBlur, style]
  );

  const combinedClassName = useMemo(() => {
    const classes = ["liquid-glass", className];
    if (isHovered) classes.push("hovered", "hover:bg-white/5");
    if (isActive) classes.push("active");
    if (isDisabled) classes.push("disabled");
    classes.push("duration-500");
    return classes.join(" ");
  }, [className, isHovered, isActive, isDisabled]);

  return (
    <>
      <div className={combinedClassName} style={glassStyle}>
        {/* Glass effect layers */}
        <div className="glass-layer-2" />
        <div className="glass-layer-5" />

        {/* Content container */}
        <div className="glass-content">{children}</div>

        <style jsx>{`
          .liquid-glass {
            box-sizing: border-box;
            display: inline-block;
            position: relative;
            transform-origin: center center;
            isolation: isolate;
            border-radius: var(--corner-radius);
            clip-path: inset(0 round var(--corner-radius));
            overflow: hidden;
            box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            /* Use will-change only when needed */
            will-change: auto;
          }

          .liquid-glass:hover,
          .liquid-glass.hovered {
            transform: translateY(-2px);
            box-shadow: 12px 12px 24px 0px rgba(0, 0, 0, 0.15);
            /* Enable GPU acceleration only during interaction */
            will-change: transform, box-shadow;
          }

          .liquid-glass.disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.05);
            will-change: auto;
          }

          .liquid-glass::before,
          .liquid-glass::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: var(--corner-radius);
            pointer-events: none;
          }

          .liquid-glass > .glass-layer-2,
          .liquid-glass > .glass-layer-5 {
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: var(--corner-radius);
            background: transparent;
            pointer-events: none;
            /* Optimize transitions - only animate what changes */
            transition: backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: auto;
          }

          .glass-layer-2 {
            z-index: 1;
            mask: linear-gradient(white 0 0) content-box,
              linear-gradient(white 0 0);
            mask-composite: xor;
            -webkit-mask-composite: xor;
            padding: var(--edge-width);
            margin: calc(var(--edge-width) * -0.6);
            /* === 📝 MODIFIED LINE BELOW === */
            backdrop-filter: blur(var(--edge-blur)) invert(5%) brightness(1.5)
              contrast(3) hue-rotate(-10deg) saturate(2);
            /* Use transform3d for hardware acceleration */
            transform: translate3d(0, 0, 0);
          }

          .liquid-glass:hover .glass-layer-2,
          .liquid-glass.hovered .glass-layer-2 {
            /* === 📝 MODIFIED LINE BELOW === */
            backdrop-filter: blur(var(--edge-blur)) invert(5%) brightness(1.8)
              contrast(10) hue-rotate(-15deg) saturate(2.3);
            will-change: backdrop-filter;
          }

          .glass-layer-5 {
            z-index: 10;
            backdrop-filter: invert(20%) contrast(1.7) blur(var(--glass-blur));
            box-shadow: 3px 3px 4px -5px rgba(255, 255, 255, 1) inset,
              1px 1px 1px -0.75px rgba(255, 255, 255, 0.25) inset,
              -4px -4px 9px -4px rgba(255, 255, 255, 0.15) inset,
              -3px -3px 4px -6px rgba(255, 255, 255, 0.8) inset,
              -1px 1px 2px 0px rgba(0, 0, 0, 0.2) inset,
              1px -1px 2px 0px rgba(0, 0, 0, 0.2) inset;
            /* Use transform3d for hardware acceleration */
            transform: translate3d(0, 0, 0);
          }

          .liquid-glass:hover .glass-layer-5,
          .liquid-glass.hovered .glass-layer-5 {
            backdrop-filter: invert(18%) contrast(1.9)
              blur(calc(var(--glass-blur) * 0.8));
            box-shadow: 4px 4px 5px -4px rgba(255, 255, 255, 1) inset,
              2px 2px 2px -0.5px rgba(255, 255, 255, 0.35) inset,
              -5px -5px 12px -3px rgba(255, 255, 255, 0.2) inset,
              -4px -4px 5px -5px rgba(255, 255, 255, 0.9) inset,
              -2px 2px 3px 0px rgba(0, 0, 0, 0.15) inset,
              2px -2px 3px 0px rgba(0, 0, 0, 0.15) inset;
            will-change: backdrop-filter, box-shadow;
          }

          .liquid-glass.disabled .glass-layer-5 {
            backdrop-filter: invert(20%) contrast(1.2)
              blur(calc(var(--glass-blur) * 1.5));
            box-shadow: 1px 1px 2px -6px rgba(255, 255, 255, 0.5) inset,
              0.5px 0.5px 1px -1px rgba(255, 255, 255, 0.15) inset,
              -2px -2px 4px -6px rgba(255, 255, 255, 0.08) inset,
              -1px -1px 2px -8px rgba(255, 255, 255, 0.4) inset;
            will-change: auto;
          }

          .glass-content {
            position: relative;
            z-index: 20;
            pointer-events: auto;
            transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            /* Use transform3d for hardware acceleration */
            transform: translate3d(0, 0, 0);
          }

          .liquid-glass.disabled .glass-content {
            pointer-events: none;
          }

          /* Reset will-change after transitions complete */
          .liquid-glass,
          .liquid-glass > .glass-layer-2,
          .liquid-glass > .glass-layer-5 {
            animation: reset-will-change 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s
              both;
          }

          @keyframes reset-will-change {
            to {
              will-change: auto;
            }
          }

          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .liquid-glass,
            .liquid-glass > .glass-layer-2,
            .liquid-glass > .glass-layer-5,
            .glass-content {
              transition: none;
              animation: none;
            }

            .liquid-glass:hover,
            .liquid-glass.hovered {
              transform: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};
