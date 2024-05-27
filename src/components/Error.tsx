interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return (
    <div className="flex items-center justify-center mt-20">
      <h1 className="text-4xl font-bold text-heart text-center">
        {message}. <br /> =/
      </h1>
    </div>
  );
}
