import chat from './assets/chat.png';
import coin from './assets/coin.png';
import delivery from './assets/f-delivery.png';
import Guarantee from './components/Guarantee';

function App() {
  return (
    <>
      <Guarantee
        img={delivery}
        title="Free shipping"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sed erat sit amet dapibus. Phasellus vitae mattis tortor. Nunc ut molestie nibh, vel maximus massa. Vestibulum ut interdum felis. Maecenas consequat nibh eu auctor rutrum. Donec sagittis maximus condimentum. Sed nec tortor commodo, tincidunt leo ac, cursus nulla."
      />
      <Guarantee
        img={coin}
        title="100% Money back"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sed erat sit amet dapibus. Phasellus vitae mattis tortor. Nunc ut molestie nibh, vel maximus massa. Vestibulum ut interdum felis. Maecenas consequat nibh eu auctor rutrum. Donec sagittis maximus condimentum. Sed nec tortor commodo, tincidunt leo ac, cursus nulla."
      />
      <Guarantee
        img={chat}
        title="Online support 24/7"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sed erat sit amet dapibus. Phasellus vitae mattis tortor. Nunc ut molestie nibh, vel maximus massa. Vestibulum ut interdum felis. Maecenas consequat nibh eu auctor rutrum. Donec sagittis maximus condimentum. Sed nec tortor commodo, tincidunt leo ac, cursus nulla."
      />
    </>
  );
}

export default App;
