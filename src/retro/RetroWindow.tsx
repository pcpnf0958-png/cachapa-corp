import type { ReactNode } from 'react';

type IRetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  controls?: boolean;
};

const RetroWindow = (props: IRetroWindowProps) => (
  <div className={`cc-window ${props.className ?? ''}`}>
    <div className="cc-titlebar flex items-center gap-1 px-1.5 py-1">
      {props.controls !== false && (
        <span className="flex gap-[3px]" aria-hidden="true">
          <span className="size-3 border border-black/50 bg-[#c0c0c0]" />
          <span className="size-3 border border-black/50 bg-[#c0c0c0]" />
          <span className="size-3 border border-black/50 bg-[#c0c0c0]" />
        </span>
      )}
      <span className="flex-1 truncate px-1 text-[11px] leading-tight tracking-tight">
        {props.title}
      </span>
    </div>
    <div className={props.bodyClassName ?? 'p-4'}>{props.children}</div>
  </div>
);

export { RetroWindow };
