import { Chat } from '@/components/chat/Chat';
import Footer from '@/components/layout/Footer';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-18">
      <div className="w-full max-w-5xl">
        <Chat />
      </div>
      <div className="flex flex-col items-center justify-between">
        <Footer />
      </div>
    </main>
  );
}
