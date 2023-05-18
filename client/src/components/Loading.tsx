import Lottie from 'lottie-react';
import loadingJson from '../assets/loading.json';

export const Loading = () => (
  <div style={{width: '100%', placeItems: 'center', display: 'grid'}}>
    <Lottie
      animationData={loadingJson}
      loop={true}
      style={{width: 130, height: 130}}
    />
    <span style={{textAlign: 'center', marginTop: 10}}>Loading...</span>
  </div>
);
