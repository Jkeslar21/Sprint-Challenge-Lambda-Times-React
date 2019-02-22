import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const activeTab = props.tab === props.selectedTab ? 'tab active-tab' : 'tab';
  return (
    <div className={activeTab} onClick={() => {props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </div>
  );
};

//PropTypes
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
