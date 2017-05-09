// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import WorldMap from './WorldMap/WorldMap';

const styles = {
  bigText:{
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '20pt',
    lineHeight: '125%'
  },
  smallText:{
    textAlign: 'center',
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '15pt',
    lineHeight: '125%'
  }
};

const MapScreen = (props) => (
  <Flexbox
    flexDirection="column"
    justifyContent='flex-end'
    alignItems='center'
    style={{ ...props.style , height: '100%'}}
  >
    <TopSection />
    <Flexbox
      style={{width:'100%', height: '60%'}}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      flexGrow={4}
    >
      <WorldMap
        onTap={props.onTap}
      />
    </Flexbox>
    <Flexbox flexGrow={20} />
  </Flexbox>
);

const TopSection = () => (
  <Flexbox
    style={{width:"100%"}}
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
    flexGrow={1}
  >
    <div id="spacer" style={{width:'60px'}} />
    <Flexbox
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <div id="spacer" style={{height:'30px'}} />
      <div style={styles.bigText}>
        Take a peek<br/>at some of our locations!
      </div>
      <div id="spacer" style={{height:'30px'}} />
    </Flexbox>
  </Flexbox>
);

export default MapScreen;