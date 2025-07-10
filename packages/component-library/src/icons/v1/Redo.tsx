import * as React from 'react';
import type { SVGProps } from 'react';
export const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M 4,17 V 14.01 A 4,4 0 0 1 8,10 h 3 v 5 L 17,9 11,3 V 8 H 8 a 6,6 0 0 0 -6,6 v 3 z"
      fill="currentColor"
    />
  </svg>
);
