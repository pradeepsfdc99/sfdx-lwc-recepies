import { LightningElement } from 'lwc';
import ShoppingCart_OBJECT from '@salesforce/schema/Shopping_Cart__c';
import NAME_FIELD from '@salesforce/schema/Shopping_Cart__c.Name';
import SCDESCRIPTION_FIELD from '@salesforce/schema/Shopping_Cart__c.ScDescription__c'

export default class ShoppingCart extends LightningElement {

   shoppingcart = ShoppingCart_OBJECT;
   name = NAME_FIELD;
   ScDescription = SCDESCRIPTION_FIELD;

//     createShoppingCart() {
//         const fields = {};
//         fields[NAME_FIELD.fieldApiName] = this.name;
//         const recordInput = { apiName: ShoppingCart_OBJECT.objectApiName, fields };
//         createRecord(recordInput)
//             .then(account => {
//                 this.accountId = account.id;
//                 this.dispatchEvent(
//                     new ShowToastEvent({
//                         title: 'Success',
//                         message: 'Account created',
//                         variant: 'success'
//                     })
//                 );
//             })

// }
}