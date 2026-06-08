import React, { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import MusicPlayer from './components/MusicPlayer'

function App() {
  useEffect(() => {
    // Lógica da notificação do dia 16 (Notificação local)
    const checkNotification = async () => {
      // Safely check if Notifications are supported
      if (!('Notification' in window)) {
        return;
      }

      const today = new Date();
      if (today.getDate() === 16) {
        const lastNotified = localStorage.getItem('lastNotifiedMonth');
        const currentMonth = today.getMonth().toString();

        // Se ainda não notificamos neste mês
        if (lastNotified !== currentMonth) {
          // Check permission or request if not granted/denied
          let permission = Notification.permission;
          if (permission === 'default') {
            permission = await Notification.requestPermission();
          }

          if (permission === "granted") {
            new Notification("Feliz dia 16, meu amor! ❤️", {
              body: "Mais um mês juntos! Abra o app para ver nosso contador atualizado.",
              icon: "/heart-icon.png",
            });

            // Marca que já notificou este mês
            localStorage.setItem('lastNotifiedMonth', currentMonth);
          }
        }
      } else {
        // Limpa o localStorage quando não é dia 16 para preparar pro próximo mês
        localStorage.removeItem('lastNotifiedMonth');
      }
    };

    checkNotification();
  }, []);

  return (
    <div className="bg-[url('./assets/background.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center relative">
      <MusicPlayer />
      {/* Overlay com gradiente romântico vibrante */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/40 via-pink-600/30 to-purple-800/60 backdrop-blur-[2px]"></div>

      {/* Card que agora terá z-index para ficar acima do overlay */}
      <div className="z-10 w-full flex justify-center py-10">
        <Card />
      </div>
    </div>
  );
}

export default App;
