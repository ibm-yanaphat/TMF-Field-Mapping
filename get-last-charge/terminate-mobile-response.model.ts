export class GetLastChargeResponse {
  id: string; // correlates to resourceGroupId
  reTransmit: string;
  sourceSystem: string;
  userSys: string;
  paymentItem: PaymentItem[]; // correlates to resourceItemList
  relatedParty: RelatedParty;
}

class PaymentItem {
  id: string; // correlates to resourceItemId
  href: string;
  name: string; // correlates to resourceName
  status: string; // correlates to resourceItemStatus
  paymentDate: string; // correlates to resourceActivatedDate
  action: string; // correlates to requestType
  errorFlag: string;
  errorMessage: string; // correlates to resourceItemErrMessage
  errors: {
    code: string; // correlates to specialErrHandling.suppCode
    condition: string; // correlates to specialErrHandling.taskKeyCondition
    developerMessage: string; // correlates to specialErrHandling.taskDeveloperMessage
  };
  account: Account;
  product: Product;
  lastBilledDate: string; // correlates to lastBillDate
}

class Account {
  id: string; // correlates to accountNo
  href: string;
  lastBilledDate: string; // correlates to lastBillOfAccount
  "@referredType": string;
  "@type": string;
}

class Product {
  productCharacteristic: ProductCharacteristic;
  parentProductSeq: string;
  productSeq: string;
  productMaxBilledDate: string; // correlates to productMaxBilledDate
  "@type": string;
}

class ProductCharacteristic {
  name: string; // eg: mobileNo or nonMobileNo
  value: string; // correlates to mobileNo or nonMobileNo
  maxBilledDate: string; // correlates to maxBilledDate
}

class RelatedParty {
  id: string; // correlates to publicIdValue
  href: string;
  orderId: string; // correlates to customerOrderId
  orderType: string; // correlates to customerOrderType
  "@referredType": string; // eg: customer
  "@type": "string"; // eg: relatedPartyRef
}
