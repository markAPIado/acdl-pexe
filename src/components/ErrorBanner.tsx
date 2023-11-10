interface ErrorBannerProps {
  message: string;
}

export default function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-2xl text-red-500 dark:text-red-400">{message}</div>
    </div>
  );
}
