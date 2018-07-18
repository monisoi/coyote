// @flow

import React from 'react';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import TimerMixin from 'react-timer-mixin';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { UPDATE_TIMER, GO_TO_NEXT_TURN } from '../actions/types';
import { AppText } from '../custom/Text';

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10,
  },
  timerIcon: {
    flex: 1,
  },
  timerText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'left',
  },
});

const TimerComponent = createReactClass({
  mixins: [TimerMixin],
  componentDidMount() {
    const { dispatch, time } = this.props;
    this.setTimeout(() => {
      dispatch({ type: time > 0 ? UPDATE_TIMER : GO_TO_NEXT_TURN });
    }, 1000);
  },
  componentDidUpdate() {
    const { dispatch, time } = this.props;
    this.setTimeout(() => {
      dispatch({ type: time > 0 ? UPDATE_TIMER : GO_TO_NEXT_TURN });
    }, 1000);
  },
  render() {
    const { time } = this.props;
    return (
      <View style={styles.timer}>
        <Icon
          name="timer"
          type="matelialicons"
          color="#66605D"
          size={30}
          containerStyle={styles.timerIcon}
        />
        <AppText style={styles.timerText}>{`00:0${String(time)}`}</AppText>
      </View>
    );
  },
});

const mapStateToProps = state => ({
  time: state.timer.time,
});

export default connect(mapStateToProps)(TimerComponent);
