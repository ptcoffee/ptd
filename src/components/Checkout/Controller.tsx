import React from "react";
import View from "./View";
import { Address } from "resources/address";
import { User } from "resources/user";
import { PaymentMethod } from "resources/payment";
import { placeOrder } from 'resources/order';
import { CartState } from "store/cart/types";
import { emptyCart } from "store/cart/actions";

interface State {
  step: number;
  method?: PaymentMethod;
  addressId?: Address["id"];
  payUrl?: string;
  isOpenPay?: boolean;
  placeOrderDisabled: boolean;
}

interface Props {
  user: User;
  cart: CartState;
  emptyCart: typeof emptyCart;
}

class CheckoutController extends React.Component<Props, State> {
  state: State = { step: 1, placeOrderDisabled: false };
  componentDidMount() {
    if (this.props.user) this.setState({ step: 2 });
  }
  componentDidUpdate(oldProps: Props) {
    if (oldProps.user !== this.props.user) {
      this.setState({ step: this.props.user ? 2 : 1 });
    }
  }
  onAddressIdChange = (addressId: Address["id"]) => {
    const step = addressId ? 3 : 2;
    this.setState({ addressId, step });
  }
  onPaymentMethodChange = (method: PaymentMethod) => {
    this.setState({ method });
  }
  onSubmit = async () => {
    this.setState({  placeOrderDisabled: true });
    const payment = await placeOrder(this.props.user.token, {
      address_id: this.state.addressId as number,
      payment_method: this.state.method as string,
      voucher: this.props.cart.voucher,
      items: Object.entries(this.props.cart.items).map(([id, item]) => ({
        id: Number(id),
        quantity: item.quantity,
        note: "",
      })),
    });
    this.props.emptyCart();
    this.setState({ placeOrderDisabled: false });
    window.location.replace(`/order/${payment.id}`);
    if (payment.payment.url && payment.payment.url.length > 0) {
      window.location.href = payment.payment.url;
    }
  }
  closePay = () => this.setState({ isOpenPay: false })
  render() {
    return (<View
      placeOrderDisabled={this.state.placeOrderDisabled}
      onAddressIdChange={this.onAddressIdChange}
      onPaymentMethodChange={this.onPaymentMethodChange}
      onSubmit={this.onSubmit}
      step={this.state.step}
      isOpenPay={this.state.isOpenPay}
      payUrl={this.state.payUrl}
      closePay={this.closePay}
    />);
  }
}

export default CheckoutController;
