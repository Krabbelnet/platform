type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-3xl bg-white p-7 shadow-sm ${className}`}>
      {children}
    </div>
  );
}