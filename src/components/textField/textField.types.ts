import type { ContentControlProps } from 'litmoss-hooks/dist/control/contentControl/contentControl.types';
import type { DisabledControlProps } from 'litmoss-hooks/dist/control/disabledControl/disabledControl.types';
import { type FocusControlProps } from 'litmoss-hooks/dist/control/focusControl/focusControl.types';
import { TextFieldType } from 'litmoss-hooks/dist/enum';

export type TextFieldValue =
  | string
  | ReadonlyArray<string>
  | number
  | undefined;

export interface TextFieldProps
  extends
  FocusControlProps<HTMLInputElement>,
  DisabledControlProps,
  ContentControlProps<HTMLInputElement, TextFieldValue> {
  placeholder?: string;
  type?: TextFieldType;
}
