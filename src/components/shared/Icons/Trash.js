import React from 'react';
import PropTypes from 'prop-types';


const Trash = props => {
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

      <g id="ProjectNight" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        <g id="App" transform="translate(-923.000000, -112.000000)" stroke="#000000">
          <g id="layout" transform="translate(0.000000, -8.000000)">
            <g id="main" transform="translate(378.000000, 86.000000)">
              <g id="tools" transform="translate(436.000000, 29.000000)">
                <g id="Trash" transform="translate(110.000000, 6.000000)">
                  <path d="M1,2 L1.95443356,22.9975383 C1.97959921,23.5511826 2.44463086,24 3.00087166,24 L16.9991283,24 C17.5518945,24 18.0199754,23.5605417 18.0455664,22.9975383 L19,2 L1,2 Z" id="Path-11" />
                  <path d="M0,2 L20,2" id="Path-6" />
                  <polyline id="Path-10" points="5 2 7 0 13 0 15 2" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Trash.defaultProps = {
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

Trash.propTypes = {
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


export default Trash;
