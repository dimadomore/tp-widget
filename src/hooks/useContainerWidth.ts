import { RefObject } from 'preact';
import { useRef, useState, useLayoutEffect } from 'preact/hooks';

type UseDimensionsHook = [
  RefObject<HTMLDivElement>,
  number | undefined,
  'xs' | 'sm' | 'md' | '',
];

const mainContainerBreakpoints = {
  md: 902,
  sm: 710,
  xs: 430,
};

export const useContainerWidth = (): UseDimensionsHook => {
  const [width, setWidth] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setWidth(
            (width) => ref.current?.getBoundingClientRect().width ?? width,
          ),
        );
      measure();

      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
  }, []);

  const getResponsiveClassName = () => {
    if (width) {
      if (width <= mainContainerBreakpoints.xs) return 'xs';
      if (width <= mainContainerBreakpoints.sm) return 'sm';
      if (width <= mainContainerBreakpoints.md) return 'md';
    }
    return '';
  };

  const responsiveClassName = getResponsiveClassName();

  return [ref, width, responsiveClassName];
};
