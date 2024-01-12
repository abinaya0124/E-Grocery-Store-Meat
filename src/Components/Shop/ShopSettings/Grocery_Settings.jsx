import PropTypes from "prop-types";
import React from "react";
import { AccountLinks } from "./AccountLinks";
import { Bag } from "./Bag";
import { Dashboard2 } from "./Dashboard2";
import { Heart } from "./Heart";
import { IconComponentNode } from "./IconComponentNode";
import { Refresh021 } from "./Refresh021";
import { Settings1 } from "./Settings1";

export const  Grocery_Settings= ({
  accountLinksProperty1 = "active",
  accountLinksIcon = <Refresh021 className="!relative !w-[24px] !h-[24px]" color="#CCCCCC" />,
  override = <Heart className="!relative !w-[24px] !h-[24px]" color="#CCCCCC" />,
  accountLinksIcon1 = <Bag className="!relative !w-[24px] !h-[24px]" color="#CCCCCC" />,
  accountLinksIcon2 = <Settings1 className="!relative !w-[24px] !h-[24px]" color="#CCCCCC" />,
  accountLinksProperty11 = "normal",
  accountLinksIcon3 = <IconComponentNode className="!relative !w-[24px] !h-[24px]" />,
}) => {
  return (
    <div className="inline-flex flex-col items-start pt-0 pb-[12px] px-0 relative bg-gray-scalewhite rounded-[8px] border border-solid border-gray-scalegray-100">
      <div className="inline-flex items-start pl-[20px] pr-0 pt-[24px] pb-[16px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-body-XL-body-XL-500 font-[number:var(--body-XL-body-XL-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-XL-body-XL-500-font-size)] tracking-[var(--body-XL-body-XL-500-letter-spacing)] leading-[var(--body-XL-body-XL-500-line-height)] whitespace-nowrap [font-style:var(--body-XL-body-XL-500-font-style)]">
          Navigation
        </div>
      </div>

      <AccountLinks className="!flex-[0_0_auto]" icon={<Dashboard2 className="!relative !w-[24px] !h-[24px]" color="black" />} property1={accountLinksProperty1} text="Dashboard" />
      <AccountLinks className="!flex-[0_0_auto]" icon={accountLinksIcon} property1="normal" text="Order History" />
      <AccountLinks className="!flex-[0_0_auto]" icon={override} property1="normal" text="Wishlist" />
      <AccountLinks className="!flex-[0_0_auto]" icon={accountLinksIcon1} property1="normal" text="Shopping Cart" />
      <AccountLinks className="!flex-[0_0_auto]" icon={accountLinksIcon2} property1={accountLinksProperty11} text="Settings" />
      <AccountLinks className="!flex-[0_0_auto]" icon={accountLinksIcon3} property1="normal" text="Log-out" />
    </div>
  );
};

Grocery_Settings.propTypes = {
  accountLinksProperty1: PropTypes.string,
  accountLinksProperty11: PropTypes.string,
};
