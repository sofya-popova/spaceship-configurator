import { useState } from "react";
import { AdvancedOptions } from "../../components/AdvancedOptions";
import { Slider } from "../../components/Slider";
import { Swatch } from "../../components/Swatch";
import { EnefitLogoFull } from "../../assets/icons/EnefitLogoFull";
import { GlobalChevronRightAlt } from "../../assets/icons/GlobalChevronRightAlt";
import SnowImg from "../../assets/img/snow.svg";
import VolcanoImg from "../../assets/img/volcano.svg";
import SkyImg from "../../assets/img/sky.svg";
import "./style.css";
import { ColorOption, WarpDriveOption, OptionPackage } from "./types";



export const Content = (): JSX.Element => {
    const [selectedColor, setSelectedColor] = useState<ColorOption>({ name: "Snow", price: 0 });
    const [selectedPower, setSelectedPower] = useState<number>(100);
    const [warpDrive, setWarpDrive] = useState<WarpDriveOption>({ name: "NO", price: 0 });
    const [optionPackage, setOptionPackage] = useState<OptionPackage>({ name: "Basic", price: 0 });

    const basePrice = 1000;
    const totalPrice = basePrice + selectedColor.price + selectedPower + warpDrive.price + optionPackage.price;

    const availableColors: ColorOption[] = [
        { name: "Snow", price: 0 },
        { name: "Volcano", price: 100 },
        { name: "Sky", price: 100 }
    ];

    const packageOptions = {
        Basic: {
            price: 0,
            options: ["Air conditioning", "Cloth seats", "FM radio"],
        },
        Sport: {
            price: 100,
            options: ["Personal tech support"],
        },
        Lux: {
            price: 500,
            options: ["Chrome wheels", "Window tint", "Subwoofer"],
        },
    };

    return (
        <div className="content">
            <div className="title">
                <div className="text-wrapper-4">🚀 Spaceship configurator</div>
                <EnefitLogoFull className="enefit-logo-full" />
            </div>

            <div className="div-3">
                <div className="column">
                    <div className="select">
                        <div className="text-wrapper-5">Select color:</div>
                        <div className="options-2">
                            {availableColors.map((color) => (
                                <div
                                    className={`card ${selectedColor.name === color.name ? "selected" : ""}`}
                                    onClick={() => setSelectedColor({ name: color.name, price: color.price })}
                                >
                                    <Swatch className="design-component-instance-node" rectangleClassName={color.name} />
                                    <div className="text">
                                        <div className="text-wrapper-6">{color.name}</div>
                                        <div className="price">+{color.price}€</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="div-4">
                        <Slider
                            className="slider-instance"
                            desciption={false}
                            editable={false}
                            outputValue={selectedPower}
                            text="Select power:"
                            trackPosition="fifty"
                            trackScaleText="200 MW"
                            trackScaleText1="100 MW"
                            trackThumbStateDefaultClassName="slider-2"
                            onChange={(value) => setSelectedPower(Number(value))}
                        />
                    </div>
                    <div className="select-2">
                        <div className="text-wrapper-5">Warp drive:</div>
                        <div className="div-4">
                            <div
                                className={`card ${warpDrive.name === "NO" ? "selected" : ""}`}
                                onClick={() => setWarpDrive({ name: "NO", price: 0 })}
                            >
                                <div className="text">
                                    <div className="text-wrapper-6">NO</div>
                                    <div className="price">+0€</div>
                                </div>
                            </div>
                            <div
                                className={`card ${warpDrive.name === "YES" ? "selected" : ""}`}
                                onClick={() => setWarpDrive({ name: "YES", price: 1000 })}
                            >
                                <div className="text">
                                    <div className="text-wrapper-6">YES</div>
                                    <div className="price">+1000€</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="select">
                        <div className="text-wrapper-5">Select option package:</div>
                        <div className="div-4">
                            {Object.keys(packageOptions).map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`card ${optionPackage.name === pkg ? "selected" : ""}`}
                                    onClick={() => setOptionPackage({ name: pkg, price: packageOptions[pkg as keyof typeof packageOptions].price })}
                                >
                                    <div className="element-MW-wrapper">
                                        <div className="text-wrapper-6">{pkg}</div>
                                    </div>
                                    <div className="price">{`+${packageOptions[pkg as keyof typeof packageOptions].price}€`}</div>
                                    <AdvancedOptions
                                        className="design-component-instance-node"
                                        mobile={false}
                                        state={optionPackage.name === pkg ? "selected" : "default"}
                                        options={packageOptions[pkg as keyof typeof packageOptions].options}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="total">
                        <div className="total-2">
                            <div className="frame">
                                <div className="text-wrapper-7">Base price:</div>
                                <div className="text-wrapper-8">1000€</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-7">Color:</div>
                                <div className="text-wrapper-8">{`+${selectedColor.price}€`}</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-7">Power:</div>
                                <div className="text-wrapper-8">{`+${selectedPower}€`}</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-7">Warp drive:</div>
                                <div className="text-wrapper-8">{`+${warpDrive.price}€`}</div>
                            </div>
                            <div className="frame">
                                <div className="text-wrapper-7">Option package:</div>
                                <div className="text-wrapper-8">{`+${optionPackage.price}€`}</div>
                            </div>
                            <img className="line" alt="Line" src="https://c.animaapp.com/FRhRdNj9/img/line-1.svg" />
                            <div className="frame-2">
                                <div className="text-wrapper-9">Total:</div>
                                <div className="text-wrapper-10">{`${totalPrice}€`}</div>
                            </div>
                        </div>
                        <div className="button-primary">
                            <div className="label-3">
                                <div className="label-4">Checkout</div>
                            </div>
                            <GlobalChevronRightAlt className="global-chevron-right" color="white" />
                        </div>
                    </div>
                    <img alt="Alien" src={selectedColor.name === "Snow" ? SnowImg : (selectedColor.name === "Volcano" ? VolcanoImg : SkyImg)}></img>
                </div>
            </div>
        </div>
    );
};
