export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
        <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl" />
      </div>
    </div>
  );
}
