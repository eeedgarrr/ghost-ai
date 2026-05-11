import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base px-6">
      <div className="text-center text-2xl font-semibold tracking-tight text-copy-primary">
        ghost AI
      </div>
      <Button>Click Me!</Button>
    </main>
  );
}
