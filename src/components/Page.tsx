import { FC } from "react"
import styled from "styled-components"
import { BaseBox } from "."

const Flex1Box = styled(BaseBox)`
	flex: 1;
`;

const WidthBox = styled(BaseBox) <{ width: number }>`
	width: ${({ width }) => `${width}px`}
`;

const PublicPage = styled(BaseBox)`
	width: 100%;
	height: 100%;
`;

export const PagePublic: FC = ({ children }) => <PublicPage>{children}</PublicPage>;

export const PageAdminSiderBar: FC<{ width?: number }> = ({ children, width }) => {
	return (
		<WidthBox width={width || 200}>{children}</WidthBox>
	)
}

export const PageAdminContant: FC = ({ children }) => <Flex1Box>{children}</Flex1Box>;