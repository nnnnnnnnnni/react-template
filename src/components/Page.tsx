import { FC } from "react"
import { Box, Flex } from "@chakra-ui/layout";

const WidthBox: FC<{ width: number }> = ({ width, children }) => <Box width={width || 20} >{children}</Box>

const PublicPage: FC = ({ children }) => <Box width='100%' height='100%' >{children}</Box>;

export const PagePublic: FC = ({ children }) => <PublicPage>{children}</PublicPage>;

export const PageAdminSiderBar: FC<{ width?: number }> = ({ children, width }) => {
	return (
		<WidthBox width={width || 200}>{children}</WidthBox>
	)
}

export const PageAdminContant: FC = ({ children }) => <Flex>{children}</Flex>;