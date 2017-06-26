import React, { Component } from 'react';
import './App.css';

const PublicImg = ({ alt, path }) => {
  const imgPath = process.env.NODE_ENV !== 'production'
    ? path
    : `${process.env.PUBLIC_URL}/img/${path}`;

  return (
    <img alt={alt} src={imgPath} />
  )
}

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Just Bring Coffee</h1>
    </div>

    <h1 className="App-intro">
      Hey, I'm Klaus Chamberlain
    </h1>

    <p>
      I am starting a new business. Have you ever wished someone could just bring you Coffee? If so, than Just Bring Coffee is the place for you. we will deliver coffee from a wide range of shops, to the doorstep of anyone
      in uptown westerville, OH. soon, we will update this site and you will be able to use a simple SMS ( a certain number
      that a bot willl answer) to get coffee at your doorstep.
      so get ready for someone bring, you <a href="https://goo.gl/4HdJRF">Coffee!!</a>
    </p>

    <img src="https://lh3.googleusercontent.com/mL95rUlfYBjVNnL1WPLIKtxpIhHpR5_4PP5Zmdh5myh4G0fNyqqe1hkvkcZbD9dLtNJ9v_0UksynTYr3M8ehgg1KPd1nphQNtjU9iR_M5uuJP8fi17-afaZG-F4ekn_gCPh4tBYmI6uKbMJd8x-RYMBvIx3xtc9-uQRtHn3BdvQodlaKYXiup7HDW5fnt6rg2ZfRabAyv17WmH_jcagno8bhdwXVEbkYa9kogrj3nW1ZRR-n6BPTiB9M-MBDtJ6ByNqjs2aW0qp4d4gApUsuwm_Y-4vPiuVJuPT_r_sdjDUVuEAB-V-1dosoFQm2mrBpPowuYCENdxN-gpZiKCLfqnlShi919sf7Pbf3QRNxznOKlvsixiqH3qFTlYTc8GrXBBSMzlzvjtJL8q1H8BTcPuo3bt5AGE0KXezQM69VIVlrph1oX3XH7AUkstTU8BDqauRS1f_GtPueGUtcpYNpjKXzT-3a1SO_dCYv9VLFfeOD-h0X8mU0kWAOTHYgBjtiWBLoxFHBaDtvPJukTxdNxIqNu3PhtIjo3jW8yv3gTvnPqXqtBg5AdNbMIB9GMwaFlQsu4QfRhIVCCxyXkWMunESldQoNHivK-6Y-BUy9gZcQ-l6G0tm3=s194-no">
    <img src="https://lh3.googleusercontent.com/9jPFUQzT7N7k3CRclAJk0LQi5Lxs5ukbGK8xfJ1HYl2xJs10gvg3i4UhBgJimEnRyaKmEyLz3X3oArcuXoyuwuWaZQ7VmuUnpiDoa-inXQh1KlCiJZwq29BlaIzqbH_3ZWygB-AX851BvNgNDSyt5ExA3xDt9bmf0s7matQHGHJV5ZBrSIoid3tNWL-yb27haAJCtakBOavjo_YoeKjrq9WMU-6x9otyYNXdv70djchWyY4Lo6B9Su12hqtB2W48taqWChaKixLJTXLzCMIPxUE5f5TobdEb6XbuI0DwBk6MbmcDKRvl8xm1GZJMCpFFH7mHJ94HGt1yFIDBBYDfoLrkXfi3jjatA8akc1OpCmgekniWJl6ZKSLQk5HlM1QAORfyw2swza0dDyriNoj2maVQ6kleFynfBa8H_WW3eXRnaWnW90wDqDsWao9onkYQ8L-wKNZBHLd7VHHpSLBsJquDihWuZsEjISvbxI_kHCwb3WEzy0Vxas1t4zNSdsXU209SrTMJXaJl2anLbS6cnvCy87BPjKwAMSEAIfq_gNcA_HEL9aqIPwOuwcn_PzR01Hat_3u9vMrGF4ZwoP1YLo31kq1bfuGGLJhabwxKyX3eekRhmouy=s190-no"> 
</div>
);

export default App;
