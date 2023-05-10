export default interface IProductDetail {
  name: string;
  image: {
    imageRatio: string;
    images: Array<string>;
    sharingImageUrl: string;
  };
  status: string;
  description: string;
  instantOrder: boolean;
  talkDeal: {
    id: number;
    status: string;
    groupSize: number;
    period: {
      from: string;
      to: string;
    };
    ongoingRoomCount: number;
    discountPrice: number;
    discountRate: number;
  };
  benefits: Array<{
    description: string;
    landingUrl: string;
    value: string;
  }>;
  delivery: {
    deliveryMethodType: string;
    optionalDeliveries: Array<any>;
    deliveryFeeType: string;
    deliveryFeePaymentType: string;
    deliveryFee: number;
    freeConditionalAmount: number;
    bundleGroupAvailable: boolean;
    availableIsolatedArea: boolean;
  };
  originArea: {
    type: string;
    content: string;
    others: boolean;
  };
  taxDeduction: boolean;
  gift: {
    gift: string;
  };
  quantity: {
    minPurchase: number;
    maxPurchase: number;
    maxPurchaseOfBuyer: number;
  };
  adultOnly: boolean;
  isLiquor: boolean;
  minorPurchasable: boolean;
  booked: {
    booked: boolean;
  };
  notices: Array<{
    id: number;
    title: string;
    wholeNotice: boolean;
    content: string;
    createdAt: string;
  }>;
  reviewUnexposed: boolean;
  favorite: boolean;
  reviewCreatable: boolean;
  store: {
    id: number;
    name: string;
    domain: string;
    farmer: boolean;
    coverImage: string;
    profileImage: string;
    consultId: string;
    channelName: string;
    channelUrl: string;
    subscribed: boolean;
    fresh: boolean;
    trackId: string;
  };
  category: {
    id: string;
    name: string;
  };
  price: {
    standardPrice: number;
    discountedPrice: number;
    discountRate: number;
    minDiscountedPrice: number;
    maxDiscountedPrice: number;
    totalDiscountedPrice: number;
  };
  events: Array<any>;
  review: {
    topReviews: Array<{
      id: string;
      content: string;
      productRating: number;
      deliveryRating: number;
      productStarRating: number;
      deliveryStarRating: number;
      best: boolean;
      writer: string;
      imageUrl: string;
      backgroundColor: string;
    }>;
    qnaCount: number;
    reviewCount: number;
    averageRating: number;
    totalProductStarRating: number;
    totalDeliveryStarRating: number;
    productPositivePercentage: number;
    deliveryPositivePercentage: number;
    productStar1Percentage: number;
    productStar2Percentage: number;
    productStar3Percentage: number;
    productStar4Percentage: number;
  };
  banners: Array<any>;
  sellerProductPoint: {};
}
