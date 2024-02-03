import DashboardItem from '@/components/common/dashboard-item';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Profile({
  src,
  name,
  email,
}: {
  src: string;
  name: string;
  email: string;
}) {
  return (
    <DashboardItem align="center" width="full">
      <Box width="80px" height="80px" position={'relative'}>
        <Image
          src={src}
          alt="profile"
          fill
          style={{ objectFit: 'cover', borderRadius: '16px' }}
        />
      </Box>
      <Box ml="20px">
        <Heading fontSize="18px">{name}</Heading>
        <Text fontSize="14px" color="var(--chakra-colors-waggle-gray-700)">
          {email}
        </Text>
      </Box>
    </DashboardItem>
  );
}
