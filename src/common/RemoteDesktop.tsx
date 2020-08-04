import React from 'react';
import NoVNC from 'react-novnc';

const RemoteDesktop: React.FC = (): React.ReactElement => {
  /* const rfbCanvas = document.getElementById('RFB') as HTMLCanvasElement;
  console.log('@@@@@@@@', rfbCanvas);

  // rfb.connect('192.168.1.153', 5900, 'J1mmyCh@nga9001');

  console.log('########', rfb);

  const rfbCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const [rfb, setRfb] = React.useState<any>(null);

  React.useEffect(() => {
    if (rfbCanvasRef.current !== null) {
      console.log('!!!!!!!!', rfbCanvasRef.current);
      setRfb(
        new RFB(
          {
            target: rfbCanvasRef.current,
          },
          'ws://192.168.1.153'
        )
      );
    }
  }, [rfbCanvasRef]);

  console.log('@@@@@@@@', rfb, rfbCanvasRef.current); */

  return <NoVNC connectionName="" onDisconnected={(): void => {}} password="" />;
};

export default RemoteDesktop;

// 192.168.1.153
