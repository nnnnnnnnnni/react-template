import { HTMLProps, ReactNode } from "react";
import styled from "@emotion/styled";

type BasicHTMLProps = HTMLProps<HTMLDivElement>;

type pickAttributes = 'onFocus' | 'onClick' | 'onBlur';

export interface BareProps extends Pick<BasicHTMLProps, pickAttributes> {
  children?: ReactNode;
  className?: string;
}

export const BaseBox = styled.div``;

interface FlexBoxProps extends BareProps {
  direction?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'center';
  justifyContent?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center';
  wrap?: 'nowrap' | 'wrap';
  width?: string;
  rowGap?: number;
  columnGap?: number;
}

export const FlexBox = styled(BaseBox)<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }): string => direction || 'rows'};
  justify-content: ${({ justifyContent }: FlexBoxProps): string => justifyContent || 'flex-start'};
  width: ${({ width }): string => width || 'auto'};
  align-items: ${({ alignItems }: FlexBoxProps): string => alignItems || 'center'};
  row-gap: ${({ rowGap }): number => rowGap || 0}px;
  column-gap: ${({ columnGap }): number => columnGap || 0}px;
  flex-wrap: ${({ wrap }): string => wrap || 'wrap'};
`;

export const SpaceWidthBox = styled(BaseBox)<{ width: number }>`
  width: ${({ width }) => `${width}px;`};
  height: 100%;
`

export const SpaceHeightBox = styled(BaseBox)<{ height: number }>`
  height: ${({ height }) => `${height}px;`};
  width: 100%;
`