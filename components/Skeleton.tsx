function Skeleton() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-6">
        <div className="h-80 w-full bg-gray-300 rounded-lg animate-pulse"></div>

        <div className="space-y-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
