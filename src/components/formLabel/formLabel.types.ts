import type { LayoutControlProps } from 'litmoss-hooks/dist/control/layoutControl/layoutControl.types';
import { Placement } from 'litmoss-hooks/dist/enum';
import { type CSSProperties } from 'react';

export interface FormLabelProps extends LayoutControlProps {
  disabled?: boolean;
  htmlFor?: string;
  label: string;
  labelPlacement?: Placement;
  labelStyle?: CSSProperties;
  loading?: boolean;
}
