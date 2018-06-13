// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NIGHT, DOUBLE, MAX0, UNKNOWN } from '../reducers/card';

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: '42%',
    backgroundColor: 'linen',
  },
  upper: {
    flex: 1,
    flexDirection: 'row',
  },
  playerWrapper: {
    flex: 1,
    flexDirection: 'row',
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
    height: '70%',
    backgroundColor: 'lightslategray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

type Props = {
  number: number,
  fieldCards: [number],
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

const renderPlayer = playerNumber => (
  <View style={styles.playerWrapper}>
    <Icon name="user" type="entypo" color="black" />
    <Text>{playerNumber}</Text>
  </View>
);

const renderLifePoint = lifePoint => {
  if (lifePoint === 3) {
    return (
      <View style={styles.lifePoint}>
        <Icon name="favorite" color="sandybrown" />
        <Icon name="favorite" color="sandybrown" />
      </View>
    );
  }
  if (lifePoint === 2) {
    return (
      <View style={styles.lifePoint}>
        <Icon name="favorite" color="sandybrown" />
        <Icon name="favorite-border" color="sandybrown" />
      </View>
    );
  }
  return (
    <View style={styles.lifePoint}>
      <Icon name="favorite-border" color="sandybrown" />
      <Icon name="favorite-border" color="sandybrown" />
    </View>
  );
};

const renderCard = card => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{card}</Text>
  </View>
);

export const PlayerComponent = ({ number, fieldCards, lifePoints }: Props): Node => (
  <View style={styles.container}>
    <View style={styles.upper}>
      {renderPlayer(number)}
      {renderLifePoint(lifePoints[number - 1])}
    </View>
    <View style={styles.lower}>{renderCard(convertDisplay(fieldCards[number - 1]))}</View>
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  lifePoints: state.game.lifePoints,
});

export default connect(mapStateToProps)(PlayerComponent);
