type KrabbelCardProps = {
  author: string;
  message: string;
  createdAt?: string;
};

export function KrabbelCard({
  author,
  message,
  createdAt,
}: KrabbelCardProps) {
  return (
    <div className="rounded-2xl bg-orange-50 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="font-bold text-slate-800">{author}</p>

        {createdAt && (
          <span className="text-sm text-slate-400">
            {new Date(createdAt).toLocaleDateString("nl-NL")}
          </span>
        )}
      </div>

      <p className="mt-3 leading-7 text-slate-700">
        {message}
      </p>
    </div>
  );
}