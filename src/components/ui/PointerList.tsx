import React from 'react';

interface PointerListProps {
  children: React.ReactNode;
  className?: string;
}

export const PointerList: React.FC<PointerListProps> = ({ children, className = '' }) => {
  return <ul className={`divide-y divide-[#e7eeff] ${className}`}>{children}</ul>;
};

interface PointerItemProps {
  icon?: React.ReactNode;
  accent?: React.ReactNode;
  label?: string;
  title: string;
  description?: string;
  meta?: string;
  bullets?: string[];
  bulletIcon?: React.ReactNode;
  className?: string;
}

export const PointerItem: React.FC<PointerItemProps> = ({
  icon,
  accent,
  label,
  title,
  description,
  meta,
  bullets,
  bulletIcon,
  className = ''
}) => {
  return (
    <li className={`flex gap-3 py-3.5 first:pt-0 last:pb-0 ${className}`}>
      {icon && (
        <span className="mt-0.5 w-7 h-7 shrink-0 rounded-lg bg-[#eef4ff] text-[#115eaf] flex items-center justify-center">
          {icon}
        </span>
      )}
      <div className="min-w-0 flex-1">
        {label && (
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#115eaf] mb-1">{label}</div>
        )}
        <div className="text-sm font-semibold text-[#000f22] leading-snug flex items-start gap-1.5">
          {accent && <span className="shrink-0 mt-0.5">{accent}</span>}
          <span>{title}</span>
        </div>
        {description && (
          <div className="text-xs text-[#43474d] leading-relaxed mt-1">{description}</div>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-xs text-[#43474d] leading-relaxed">
                {bulletIcon ? (
                  <span className="shrink-0 mt-0.5">{bulletIcon}</span>
                ) : (
                  <span className="text-emerald-600 font-bold shrink-0 leading-relaxed" aria-hidden="true">
                    &#8250;
                  </span>
                )}
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {meta && <div className="text-[11px] text-[#74777e] mt-1.5 font-normal">{meta}</div>}
      </div>
    </li>
  );
};
