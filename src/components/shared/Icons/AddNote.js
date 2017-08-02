import React from 'react';
import PropTypes from 'prop-types';


const AddNote = props => {
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

      <g id="ProjectNight" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="App" transform="translate(-27.000000, -181.000000)" stroke="#303B42">
          <g id="layout" transform="translate(0.000000, -8.000000)">
            <g id="leftPanel" transform="translate(0.000000, 8.000000)">
              <g id="notePad" transform="translate(28.000000, 182.000000)">
                <path d="M10.3125,14.2282609 L21.5335625,3.61905978 C21.8215,3.342625 22,2.96151087 22,2.54076087 C22,2.12001087 21.8215,1.73889674 21.5335625,1.46246196 L20.4710625,0.446157609 C20.1820625,0.17073913 19.783625,0 19.34375,0 C18.903875,0 18.5054375,0.17073913 18.2164375,0.446157609 L7.125,11.1793478 L5,16.2608696 L10.3125,14.2282609 Z" id="Stroke-1749" />
                <path d="M18,0.956521739 L21,3.82608696" id="Stroke-1751" />
                <polyline id="Stroke-1753" points="7 11.4782609 8.71428571 11.4782609 9.28571429 12.626087 10.4285714 13.2 11 14.3478261" />
                <path d="M6,15.3043478 L6.5,15.7826087" id="Stroke-1755" />
                <path d="M19,2.86956522 L9,12.4347826" id="Stroke-1757" />
                <path d="M4,2.39130435 C4,2.65530435 3.776,2.86956522 3.5,2.86956522 C3.224,2.86956522 3,2.65530435 3,2.39130435 C3,2.12730435 3.224,1.91304348 3.5,1.91304348 C3.776,1.91304348 4,2.12730435 4,2.39130435 Z" id="Stroke-1759" />
                <path d="M3,2.86956522 L3,0" id="Stroke-1761" />
                <path d="M8,2.39130435 C8,2.65530435 7.776,2.86956522 7.5,2.86956522 C7.224,2.86956522 7,2.65530435 7,2.39130435 C7,2.12730435 7.224,1.91304348 7.5,1.91304348 C7.776,1.91304348 8,2.12730435 8,2.39130435 Z" id="Stroke-1763" />
                <path d="M8,2.86956522 L8,0" id="Stroke-1765" />
                <path d="M13,2.39130435 C13,2.65530435 12.776,2.86956522 12.5,2.86956522 C12.224,2.86956522 12,2.65530435 12,2.39130435 C12,2.12730435 12.224,1.91304348 12.5,1.91304348 C12.776,1.91304348 13,2.12730435 13,2.39130435 Z" id="Stroke-1767" />
                <path d="M12,2.86956522 L12,0" id="Stroke-1769" />
                <path d="M16,3.04542857 L16,1.57142857 C16,0.704 15.3674667,0 14.5888,0 L1.4112,0 C0.632533333,0 0,0.704 0,1.57142857 L0,20.4285714 C0,21.296 0.632533333,22 1.4112,22 L14.5888,22 C15.3674667,22 16,21.296 16,20.4285714 L16,9.48828571" id="Stroke-1771" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

AddNote.defaultProps = {
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

AddNote.propTypes = {
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


export default AddNote;
