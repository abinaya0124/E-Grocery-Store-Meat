import PropTypes from "prop-types";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

// import React from "react";
// import { IconComponentNode } from "./IconComponentNode";
// import { NamecandidateNameSocialMediaScore101 } from "./NamecandidateNameSocialMediaScore101";
// import { NamecandidateNameSocialMediaScore102 } from "./NamecandidateNameSocialMediaScore102";
// import { SocialMedia } from "./SocialMedia";

export const TeamCard = (
    {
    
    property1,
    text = "Jenny Wilson",
    text1 = "Ceo &amp; Founder",
    imageClassName ="![object-fit:unset]",
    image = "image.png",
}) => {
    const [theme] = useThemeHook()

    return (
        <div style={{ background: theme ? "black" : "" }}
            className={`w-[312px] h-[368px] rounded-[8px] bg-gray-scalewhite relative ${
                property1 === "default" ? "border border-solid" : ""
            } ${property1 === "default" ? "border-gray-scalegray-100" : ""} ${
                property1 === "hover" ? "shadow-[0px_20px_48px_#00260214]" : ""
            }`}
        >
            <div
                className={`inline-flex flex-col items-start gap-[4px] absolute ${
                    property1 === "default" ? "left-[19px]" : "left-[20px]"
                } ${property1 === "default" ? "top-[295px]" : "top-[296px]"}`}
            >
                <div style={{ color: theme ? "#fff" : "" }}  className="font-body-large-body-large-500 w-[272px] mt-[-1.00px] tracking-[var(--body-large-body-large-500-letter-spacing)] text-[length:var(--body-large-body-large-500-font-size)] [font-style:var(--body-large-body-large-500-font-style)] text-gray-scalegray-900 font-[number:var(--body-large-body-large-500-font-weight)] leading-[var(--body-large-body-large-500-line-height)] relative">
                    {text}
                </div>
                <div style={{ color: theme ? "#fff" : "" }}  className="font-body-small-body-small-400 w-[272px] tracking-[var(--body-small-body-small-400-letter-spacing)] [font-style:var(--body-small-body-small-400-font-style)] text-[length:var(--body-small-body-small-400-font-size)] text-gray-scalegray-500 font-[number:var(--body-small-body-small-400-font-weight)] leading-[var(--body-small-body-small-400-line-height)] relative">
                    {text1}
                </div>
            </div>
            {property1 === "default" && (
                <img
                    className={`absolute w-[312px] h-[280px] -top-px -left-px object-cover ${imageClassName}`}
                    alt="Image"
                    src={image}
                />
            )}

            {property1 === "hover" && (
                <div
                    className={`absolute w-[312px] h-[280px] top-0 left-0 bg-[url(image-2.png)] bg-cover bg-[50%_50%] ${imageClassName}`}
                >
                    <div className="inline-flex items-start gap-[4px] relative top-[120px] left-[70px]">
                        {/* <SocialMedia className="!relative !w-[40px] !h-[40px]" />
                        <IconComponentNode className="!relative !w-[40px] !h-[40px]" />
                        <NamecandidateNameSocialMediaScore101 className="!relative !w-[40px] !h-[40px]" />
                        <NamecandidateNameSocialMediaScore102 className="!relative !w-[40px] !h-[40px]" /> */}
                    </div>
                </div>
            )}
        </div>
    );
};

TeamCard.propTypes = {
    property1: PropTypes.oneOf(["hover", "default"]),
    text: PropTypes.string,
    text1: PropTypes.string,
    imageClassName:PropTypes.string,
    image: PropTypes.string,
};
