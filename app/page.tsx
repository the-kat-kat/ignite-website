"use client";
import EyeTracker from '@/components/ui/eye-tracker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-orange-600">
        Ignite draft
        </h1>

        <EyeTracker />
    </main>
  );
}