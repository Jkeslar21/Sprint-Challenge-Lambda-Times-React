import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {props.tabs.map(tab => <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />)}
      </div>
    </div>
  );
};

//PropTypes
Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
