import { CompA } from './CompA';
import { CompB } from './CompB';
import { CountBtn } from './CountBtn';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-8 border p-4">
        <CompA />
        <CountBtn />
        <CompB />
      </div>

      <footer>
        Check out my lib - here{' '}
        <a
          href="https://github.com/asmyshlyaev177/state-in-url"
          target="_blank"
          className="text-semibold text-green-400"
        >
          state-in-url
        </a>
      </footer>
    </main>
  );
}
