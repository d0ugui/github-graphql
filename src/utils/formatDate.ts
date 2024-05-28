export function formatDate(date: string) {
  const formatedDate = new Date(date);

  return Intl.DateTimeFormat("pt-br").format(formatedDate);
}
