import React from 'react';
import PropTypes from 'prop-types';


const Settings = props => {
  let ariaLabelledBy;
  let titleId;
  let descId;

  const {
    hidden, title, desc, role,
    width, height, viewBox,
    fill, className, x, y,
    handleClick
  } = props;

  if (title) {
    titleId = (Math.random() * 100000).toFixed(0);
    ariaLabelledBy = `${titleId}`;
  }

  if (desc) {
    descId = (Math.random() * 100000).toFixed(0);
    ariaLabelledBy += ` ${descId}`;
  }

  return (
    <svg className={ className } onClick={ handleClick }
      width={ width }
      height={ height }
      viewBox={ viewBox }
      fill={ fill }
      role={ role }
      aria-labelledby={ ariaLabelledBy }
      aria-hidden={ hidden }
      x={ x }
      y={ y }>

      {title
        ? <title id={ titleId }>{ title }</title>
        : null
      }

      {desc
        ? <desc id={ descId }>{ desc }</desc>
        : null
      }

      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="App" transform="translate(-1380.000000, -28.000000)" stroke="#303B42">
          <g id="layout" transform="translate(0.000000, -8.000000)">
            <g id="header" transform="translate(378.000000, 0.000000)">
              <g id="settings" transform="translate(1003.000000, 36.000000)">
                <path d="M20.4619826,12 C20.4619826,11.5 20.4077217,11.014 20.321113,10.538 L23.1844174,8.242 L20.7854609,4.258 L17.2835478,5.484 C16.5040696,4.858 15.6087652,4.366 14.6362435,4.024 L13.9924174,0.5 L9.19241739,0.5 L8.5485913,4.024 C7.57502609,4.366 6.67972174,4.858 5.90128696,5.484 L2.39937391,4.258 L0.000417391304,8.242 L2.86372174,10.538 C2.77711304,11.014 2.72285217,11.5 2.72285217,12 C2.72285217,12.5 2.77711304,12.986 2.86372174,13.462 L0.000417391304,15.758 L2.39937391,19.742 L5.90128696,18.516 C6.67972174,19.142 7.57502609,19.634 8.5485913,19.976 L9.19241739,23.5 L13.9924174,23.5 L14.6362435,19.976 C15.6087652,19.634 16.5040696,19.142 17.2835478,18.516 L20.7854609,19.742 L23.1844174,15.758 L20.321113,13.462 C20.4077217,12.986 20.4619826,12.5 20.4619826,12 Z" id="Stroke-1664" />
                <path d="M16.173913,12 C16.173913,14.485 14.0713043,16.5 11.4782609,16.5 C8.88521739,16.5 6.7826087,14.485 6.7826087,12 C6.7826087,9.515 8.88521739,7.5 11.4782609,7.5 C14.0713043,7.5 16.173913,9.515 16.173913,12 Z" id="Stroke-1666" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Settings.defaultProps = {
  className: '',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  x: '',
  y: '',
  fill: '#000000',
  role: 'img',
  title: '',
  desc: '',
  hidden: false
};

Settings.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
  fill: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  hidden: PropTypes.bool
};


export default Settings;
