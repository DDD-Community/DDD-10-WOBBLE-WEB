import { CardInfo } from './types';

export const mockProfile = [
  {
    name: '신승준',
    nickname: '메타몽',
    gender: 'male',
    birth: '1995-01-21',
    profile_image_url: '~~~',
    mbti: 'INFJ',
    hobby: ['영화 🍿', '등산 ⛰️', '독서'],
  },
  {
    name: '신승준',
    nickname: '승주니',
    gender: 'male',
    birth: '1995-01-21',
    profile_image_url: '~~~',
    mbti: 'INFJ',
    hobby: ['공부 📔', '운동 🤼‍♀️'],
    group: {
      name: 'DDD',
    },
  },
];

export const mockReceivedCardInfo: CardInfo[] = [
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 1,
    sid: 'GREETING',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content:
      '안녕하세요, 승준님! 이런 능력자가 우리 회사에 오신다니 너무 반갑고 기대됩니다!',
    visible: true,
  },
  {
    createdAt: new Date('2023-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 2,
    sid: 'ENCOURAGEMENT',
    fromUser: {
      id: 0,
      name: '민수',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '승준님 오늘 하루도 파이팅입니다!!! 👍',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 3,
    sid: 'GRATITUDE',
    fromUser: {
      id: 0,
      name: '원토리',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content:
      '어제 제 버그 같이 잡아주셔서 너무 감사드립니다! 덕분에 잘 해결했어요~',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 4,
    sid: 'GREETING',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '반갑습니다 승준님!! 같이 열심히 일해봐요 ♥️',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 5,
    sid: 'CELEBRATION',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '어제 생일 축하드립니다 승준님!!!🔥',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 6,
    sid: 'CELEBRATION',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '생일 축하드려요!!💥',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 7,
    sid: 'ENCOURAGEMENT',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '같이 열심히 일해봐요 승준님!!! 화이팅!',
    visible: true,
  },
];

export const mockSentCardInfo: CardInfo[] = [
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 1,
    sid: 'GREETING',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '안녕하세요, 환영해 주셔서 감사합니다!!! 화이팅!!!',
    visible: true,
  },
  {
    createdAt: new Date('2023-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 2,
    sid: 'ENCOURAGEMENT',
    fromUser: {
      id: 0,
      name: '민수',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '어제 커피 잘 마셧습니다! 오늘 하루도 파이팅입니다!!! ⭐️',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 3,
    sid: 'GRATITUDE',
    fromUser: {
      id: 0,
      name: '원토리',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '덕분에 저도 많이 알아가네요 ㅎㅎ',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 4,
    sid: 'GREETING',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '제가 더 반갑습니다!! 팀원으로서 화이팅할게요♥️',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 5,
    sid: 'CELEBRATION',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '어제 생일 축하드립니다 승준님!!!🔥',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 6,
    sid: 'CELEBRATION',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '생일 축하드려요!!💥',
    visible: true,
  },
  {
    createdAt: new Date('2024-02-24T13:40:48.424Z'),
    updatedAt: new Date('2024-02-24T13:40:48.424Z'),
    id: 7,
    sid: 'ENCOURAGEMENT',
    fromUser: {
      id: 0,
      name: 'DK',
    },
    toUser: {
      id: 0,
      name: 'MS',
    },
    group: {
      id: 0,
      name: 'Group1',
      owner: {
        id: 0,
        name: 'Group 1 owner',
      },
    },
    content: '같이 열심히 일해봐요 승준님!!! 화이팅!',
    visible: true,
  },
];
