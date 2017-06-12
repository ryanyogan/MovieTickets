import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Option from './Option';

const { width } = Dimensions.get('window');
const optionWidth = (width - 0) / 3 - 10;
const { array, number, func } = PropTypes;

export default class Options extends Component {
  static propTypes = {
    values: array.isRequired,
    chosen: number,
    onChoose: func.isRequired,
  }

  render() {
    const { values, chosen, onChoose } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          horizontal={true}
          decelerationRate={0.1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          snapToInterval={optionWidth}
          style={styles.option}
        >
          {values.map((value, index) =>
            <View style={{ width: optionWidth }} key={index}>
              <Option
                value={value}
                isChosen={index === chosen}
                onChoose={() => onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    marginRight: -10,
  },
});