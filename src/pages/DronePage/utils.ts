export const convertSnakeCaseToCapitalize = (text: string) => {
  return text.replace(/^_*(.)|_+(.)/g, (_, c, d) => c ? c.toUpperCase() : ` ${d.toUpperCase()}`);
};