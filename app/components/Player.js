// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NIGHT, DOUBLE, MAX0, UNKNOWN } from '../reducers/card';
import { AppText } from '../custom/Text';

const styles = StyleSheet.create({
  container: {
    width: '31%',
    height: '47%',
  },
  userContainer: {
    backgroundColor: '#CCC3BA',
  },
  aliveWrapper: {
    flex: 1,
  },
  upper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  playerWrapper: {
    flex: 1,
  },
  lifePoint: {
    flex: 1,
    flexDirection: 'row',
  },
  lower: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '70%',
    height: '80%',
    backgroundColor: '#FFF9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deadWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NORMAL_COLOR = '#66605D';
const ACTIVE_COLOR = '#F58F71';

type Props = {
  number: number,
  fieldCards: [number],
  turnOf: number,
  lifePoints: [number],
};

const convertDisplay = card => {
  switch (card) {
    case NIGHT: {
      return '0(夜)';
    }
    case DOUBLE: {
      return 'x2';
    }
    case MAX0: {
      return 'MAX→0';
    }
    case UNKNOWN: {
      return '?';
    }
    default: {
      return card;
    }
  }
};

const renderPlayer = (playerNumber, turnOf) => {
  const iconColor = playerNumber === turnOf ? ACTIVE_COLOR : NORMAL_COLOR;
  return (
    <View style={styles.playerWrapper}>
      <Icon name="user" type="entypo" color={iconColor} size={30} />
    </View>
  );
};

const renderLifePoint = lifePoint => {
  if (lifePoint === 3) {
    return (
      <View style={styles.lifePoint}>
        <Icon name="favorite" color={NORMAL_COLOR} />
        <Icon name="favorite" color={NORMAL_COLOR} />
      </View>
    );
  }
  if (lifePoint === 2) {
    return (
      <View style={styles.lifePoint}>
        <Icon name="favorite" color={NORMAL_COLOR} />
        <Icon name="favorite-border" color={NORMAL_COLOR} />
      </View>
    );
  }
  return (
    <View style={styles.lifePoint}>
      <Icon name="favorite-border" color={NORMAL_COLOR} />
      <Icon name="favorite-border" color={NORMAL_COLOR} />
    </View>
  );
};

const renderCard = card => (
  <View style={styles.card}>
    <AppText style={styles.cardText}>{card}</AppText>
  </View>
);

const renderAlivePlayer = (playerNumber, turnOf, fieldCards, lifePoints) => (
  <View style={styles.aliveWrapper}>
    <View style={styles.upper}>
      {renderPlayer(playerNumber, turnOf)}
      {renderLifePoint(lifePoints[playerNumber - 1])}
    </View>
    <View style={styles.lower}>{renderCard(convertDisplay(fieldCards[playerNumber - 1]))}</View>
  </View>
);

const renderDeadPlayer = () => (
  <View style={styles.deadWrapper}>
    <Icon name="block" color={NORMAL_COLOR} size={50}/>
  </View>
);

export const PlayerComponent = ({ number, fieldCards, turnOf, lifePoints }: Props): Node => (
  <View
    style={
      number === 1 ? StyleSheet.flatten([styles.container, styles.userContainer]) : styles.container
    }
  >
    { lifePoints[number - 1] > 0
      ? renderAlivePlayer(number, turnOf, fieldCards, lifePoints)
      : renderDeadPlayer()}
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  turnOf: state.game.turnOf,
  lifePoints: state.game.lifePoints,
});

export default connect(mapStateToProps)(PlayerComponent);
