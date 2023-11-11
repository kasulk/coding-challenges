export const arrayPlusArray = (nums1: number[], nums2: number[]): number => {
  return [...nums1, ...nums2].reduce((sum, num) => sum + num, 0);
};
