export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-md text-xs" key={tag}>
      {tag}
    </span>
  );
}
