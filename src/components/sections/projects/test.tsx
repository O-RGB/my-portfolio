// SmartTruncateText.tsx
import React, { useEffect, useRef, useState } from "react";

interface SmartTruncateTextProps {
  text: string;
  className?: string;
}

const SmartTruncateText: React.FC<SmartTruncateTextProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);
  const [truncatedText, setTruncatedText] = useState<string>(text);

  useEffect(() => {
    const checkTruncation = (): void => {
      const container = containerRef.current;
      const textElement = textRef.current;

      if (!container || !textElement) return;

      // Reset to full text
      textElement.textContent = text;

      // Check if content overflows
      if (textElement.scrollHeight > container.clientHeight) {
        let start = 0;
        let end = text.length;
        let mid = Math.floor((start + end) / 2);
        let bestFit = "";

        // Binary search for best fit
        while (start <= end) {
          const testText = `${text.slice(0, mid)}...`;
          textElement.textContent = testText;

          if (textElement.scrollHeight <= container.clientHeight) {
            bestFit = testText;
            start = mid + 1;
          } else {
            end = mid - 1;
          }
          mid = Math.floor((start + end) / 2);
        }

        setTruncatedText(bestFit);
        setIsTruncated(true);
      } else {
        setTruncatedText(text);
        setIsTruncated(false);
      }
    };

    // Check on mount and window resize
    checkTruncation();

    const resizeObserver = new ResizeObserver(checkTruncation);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full overflow-y-hidden ${className}`}
    >
      <div ref={textRef} className="absolute inset-0">
        {truncatedText}
      </div>
    </div>
  );
};

export default SmartTruncateText;
