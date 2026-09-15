import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { toast } from 'react-toastify';

export default function MainLayout({
  children,
}) {
  const [menuVisible, setMenuVisible] = useState(true);

  toast.success('Aplicación iniciada correctamente.');

  return <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header
      onClickMenu={() => setMenuVisible(!menuVisible)}
    />
    
    <div
      className="body"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Menu
        visible={menuVisible}
      />

      <main
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
        }}
      >
        {children}
      </main>
    </div>

    <Footer />
  </div>;
}