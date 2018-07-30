import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../../utils.js'

/**
 * @description displays information about the entrys intended time
 * @param { Number } props.event.sportID
 * @param { Number } props.event.startBlock
 * @param { Number } props.event.endBlock
 */
var FieldDayCalendarEntry = (props) => (
  <div className="hover-lightblue">{ `${utils.sportNumConv(props.event.sportId)} ${utils.blockToTime(props.event.startBlock)} to ${utils.blockToTime(props.event.endBlock)}` }</div>
  )

FieldDayCalendarEntry.propTypes = {
  event: PropTypes.object.isRequired,
}

export default FieldDayCalendarEntry;