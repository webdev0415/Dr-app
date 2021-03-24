/**
 * Case insensitive sort accessor for multiple columns
 * @param headerId Array of strings; Column names, wich should be sorted case-insensitive
 */
export const caseInsensitiveSortAccessor = (headerId: string[]): (data: any, sortHeaderId: string) => string => {
  return (data: any, sortHeaderId: string): string => {
    const headerDataType = typeof(data[sortHeaderId]);
    if (headerDataType === 'string' && headerId.findIndex(val => val === sortHeaderId) !== -1 ) {
      return data[sortHeaderId].toLowerCase();
    } else {
      return data[sortHeaderId];
    }
  };
};
