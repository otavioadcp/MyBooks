//Cria a camada que sobrepoe a tela, para mostrar que esta sendo feito loading
import React from 'react';
import '../LoadingOverlay.css';

const overlayStyle = {
  position: 'fixed',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  background: 'rgba(125,255,125, 0.4)',
  display: 'none'
};

const spinnerStyle = {
  position: 'fixed',
  top: 'calc(50% - 32px)',
  left: 'calc(50% - 32px)'
};
export default function LoadingOverlay(props) {
  const { loading } = props;

  return (
    <div style={{ ...overlayStyle, display: loading ? 'block' : 'none' }}>
      <div style={spinnerStyle} className="lds-facebook">
        <div />
        <div />
        <div />
      </div>{' '}
    </div>
  );
}
