export default interface IMainBanner {
  id: number;
  name: string;
  firstImageUrl: string;
  landingType: string;
  remainSeconds: number;
  mainCopy: string;
  subCopy: string;
  copyExpose: boolean;
  subCopyColor: string;
  mainCopyColor: string;
  pcImageUrl: string;
  displayPeriod: { from: string; to: string };
}
