import React from 'react';
import MdxLayout from '../../layout/MDX_Layout';

interface IProps {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  block?: string;
  p?: string;
}

const Typeography = (props: IProps) => {
  const { h1, h2, h3, h4, h5, block, p } = props;
  return (
    <div className="prose">
      {h1 && <h1>{h1}</h1>}
      {h2 && <h2>{h2}</h2>}
      {h3 && <h3>{h3}</h3>}
      {h4 && <h4>{h4}</h4>}
      {h5 && <h5>{h5}</h5>}
      {block && <blockquote>{block}</blockquote>}
      {p && <p>{p}</p>}
    </div>
  );
};

export default Typeography;
