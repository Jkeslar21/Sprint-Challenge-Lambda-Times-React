import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({selectTabHandler, selectedTab, tabs}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {tabs.map(tab => <Tab selectTabHandler={selectTabHandler} selectedTab={selectedTab} tab={tab} />)}
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
