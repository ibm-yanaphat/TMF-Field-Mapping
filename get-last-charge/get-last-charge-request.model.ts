export class GetLastChargeRequest {
  id: string; // correlates to resourceGroupId
  reTransmit: string;
  sourceSystem: string;
  userSys: string;
  paymentItem: PaymentItem[];
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
  errors: {
    code: string; // correlates to specialErrHandling.suppCode
    condition: string; // correlates to specialErrHandling.taskKeyCondition
    message: string; // correlates to specialErrHandling.taskDeveloperMessage
  };
  account: Account;
  product: Product;
}

class Account {
  id: string; // correlates to accountNo
  href: string;
  "@referredType": string;
  "@type": string;
}

class Product {
  productCharacteristic: ProductCharacteristic;
  parentProductSeq: string;
  productSeq: string;
  "@type": string;
}

class ProductCharacteristic {
  name: string; // eg: mobileNo or nonMobileNo
  value: string; // correlates to mobileNo or nonMobileNo
}

class RelatedParty {
  id: string; // correlates to publicIdValue
  href: string;
  orderId: string; // correlates to customerOrderId
  orderType: string; // correlates to customerOrderType
  "@referredType": string; // eg: customer
  "@type": "string"; // eg: relatedPartyRef
}
