export function dateFormatter(dateStr: string) {
  if (!dateStr) return;
  const date = new Date(dateStr);

  return `${date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })}`;
}
