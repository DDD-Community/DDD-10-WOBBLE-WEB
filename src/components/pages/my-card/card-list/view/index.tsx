import { Text } from '@chakra-ui/react';
import { CardInfo, CardType } from '../../types';
import { CardTypeText } from './constants';
import {
  CardListItem,
  CardTypeBadge,
  CardViewListContainer,
  CardViewGridContainer,
  CardGridItem,
} from './styles';
import { Props } from './types';
import { formatDateOnToday } from '@/utils/date';

function GridItem({ card }: { card: CardInfo }) {
  return <CardGridItem type={card.sid}>{card.content}</CardGridItem>;
}

function ListItem({ card }: { card: CardInfo }) {
  const statusMessage = `${CardTypeText[card.sid]} 카드를 보냈어요!`;

  return (
    <CardListItem>
      <Text>{card.fromUser.name}</Text>
      <Text
        flexBasis="335px"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
      >
        <strong>{statusMessage}</strong> {' - ' + card.content}
      </Text>
      <Text>{formatDateOnToday(card.createdAt)}</Text>
      <CardTypeBadge type={card.sid}>{CardTypeText[card.sid]}</CardTypeBadge>
    </CardListItem>
  );
}

export default function CardView({ viewType, cardList }: Props) {
  return (
    <>
      {viewType === 'LIST' ? (
        <CardViewListContainer>
          {cardList.map((card) => (
            <ListItem key={card.id} card={card} />
          ))}
        </CardViewListContainer>
      ) : (
        <CardViewGridContainer>
          {cardList.map((card) => (
            <GridItem key={card.id} card={card} />
          ))}
        </CardViewGridContainer>
      )}
    </>
  );
}