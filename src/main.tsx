
import { initializeWithdrawalWidget } from './Withdraw'
import { initializeDepositWidget } from './Deposit';
import './index.css'

export const withdrawWidget = initializeWithdrawalWidget();
export const depositWidget = initializeDepositWidget();
console.log("Cowry Protocol Widget script running on your application!")


