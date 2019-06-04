import React, {useState} from 'react';

import Sidebar from '../../components/organisms/Sidebar';

import {Container, Test, Content, Tile} from './styles';

import UploadBar from '../../components/molecules/UploadBar';
import Donut from '../../components/molecules/Donut';
import {reduce, map} from 'lodash';

const initialValue = {
  m_a: 0,
  move_to_self_supply: 0,
  group_switches: 0,
  consolidation: 0,
  general_switches: 0,
  other: 0,
};

// const sum = reduce(switches, (acc, item) => {
//   return {
//     m_a: acc.m_a + item.loss.m_a,
//     move_to_self_supply: acc.move_to_self_supply + item.loss.move_to_self_supply,
//     group_switches: acc.group_switches + item.loss.group_switches,
//     consolidation: acc.consolidation + item.loss.consolidation,
//     general_switches: acc.general_switches + item.loss.general_switches,
//     other: acc.other + item.loss.other,
//   }
// }, initialValue);

enum Color {
  vivid_tangerine = '#FFA080',
  mauve = '#DF97FB',
  pastel_green = '#6DE373',
  dandelion = '#FFD65B',
  cornflower = '#7EAAE1',
  turquoise_blue = '#55E2D9',
}

const settings = {
  m_a: {
    label: 'M&A',
    color: Color.vivid_tangerine,
  },
  move_to_self_supply: {
    label: 'Move to self-supply',
    color: Color.mauve,
  },
  group_switches: {
    label: 'Group switches',
    color: Color.pastel_green,
  },
  consolidation: {
    label: 'Consolidation',
    color: Color.dandelion,
  },
  general_switches: {
    label: 'General switches',
    color: Color.cornflower,
  },
  other: {
    label: 'Other',
    color: Color.turquoise_blue,
  },
};

type T = typeof settings;

interface PieChunk {
  label: string;
  color: Color;
  value: number;
}

// const pieChunks = map(sum, (value: number, key: keyof T) => ({
//   label: settings[key].label,
//   color: settings[key].color,
//   value,
// })) as unknown as PieChunk[];

// const initialState = {
//   hoveredChunk: null,
// };

export default () => {
  // const [ state, setState ] = useState(initialState);

  // const handleHover = (index: number): void => {
  //   setState({ ...state, hoveredChunk: index });
  // }

  return (
    <Container>
      <Sidebar />
      <Test>
        <UploadBar />
        <Content>
          <Tile>
            {/* <Donut
              data={pieChunks}
              hoveredSegment={state.hoveredSegment}
              mouseEvents
              onHover={this.handleHover}
            /> */}
          </Tile>
        </Content>
      </Test>
    </Container>
  );
};
