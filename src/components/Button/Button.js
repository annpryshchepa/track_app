import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import "../../icon/stopwatch.svg";

import './Button.scss';

export const CustomButton = ({ content, onClickAction, isOutline, buttonIcon, className }) => {
  return (
    <Button outline={isOutline} onClick={onClickAction()} className={className}>
      <span className={buttonIcon}></span>
      {content}
    </Button>
  );
};

CustomButton.propTypes = {
  content: PropTypes.string.isRequired,
  onClickAction: PropTypes.func,
  isOutline: PropTypes.bool,
  className: PropTypes.string
};

CustomButton.defaultProps = {
  onClickAction: () => {},
  isOutline: false,
  className: ""
};