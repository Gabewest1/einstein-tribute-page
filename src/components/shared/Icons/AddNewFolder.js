import React from 'react';
import PropTypes from 'prop-types';


const AddNewFolder = props => {
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
        <g id="App" transform="translate(-24.000000, -119.000000)" stroke="#000000">
          <g id="layout" transform="translate(0.000000, -8.000000)">
            <g id="leftPanel" transform="translate(0.000000, 8.000000)">
              <g id="New-Folder" transform="translate(25.000000, 120.000000)">
                <path d="M0.995577499,0 C0.445735229,0 0,0.43945834 0,1.00246167 L0,20.9975383 C0,21.5511826 0.439813137,22 0.996534824,22 L27.0034652,22 C27.5538362,22 28,21.5446944 28,21.0081969 L28,2.99180311 C28,2.44404538 27.5510798,2 26.992516,2 L14.007484,2 C13.4510659,2 12.6875,1.6875 12.2892435,1.28924346 L11.7107565,0.71075654 C11.3182165,0.318216542 10.555163,0 10.0044225,0 L0.995577499,0 Z" id="Path-54" />
                <path d="M14,8 L14,16" id="Path-52" />
                <path d="M10,12 L18,12" id="Path-53" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

AddNewFolder.defaultProps = {
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

AddNewFolder.propTypes = {
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


export default AddNewFolder;
