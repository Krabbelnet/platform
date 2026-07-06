type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
      : "bg-white text-orange-600 hover:bg-orange-100 shadow-sm";

  return (
    <button className={`rounded-full px-8 py-4 font-black transition ${styles}`}>
      {children}
    </button>
  );
}