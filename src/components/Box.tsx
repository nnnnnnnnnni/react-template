import { FC } from "react";
import { Box } from "@chakra-ui/layout";

export const SpaceHeightBox: FC<{height: number}> = ({ height }) => <Box height={height || 20} width='100%' />