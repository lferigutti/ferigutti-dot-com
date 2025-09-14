export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm" key={tag}>
      {tag}
    </span>
  );
}
