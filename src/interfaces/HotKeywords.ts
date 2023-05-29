export default interface IHotKeywords {
  hotShoppingKeywords: Array<{
    shoppingKeywordId: number;
    hotKeyword: boolean;
    keywordName: string;
    landingUrl: string;
  }>;
  commonShoppingKeywords: Array<{
    shoppingKeywordId: number;
    hotKeyword: boolean;
    keywordName: string;
    landingUrl: string;
  }>;
}
