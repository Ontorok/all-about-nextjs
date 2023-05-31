export default function getFormattedDate(dateString: string): string {
  const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
  return formattedDate;
}
