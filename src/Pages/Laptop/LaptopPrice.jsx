import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { laptopFeaturesApi, predictPriceApi } from "../../constant/constant";
import "./LaptopPrice.css";

// { BRAND: "a" ,
//  MODEL: "a" ,
//  "PROCESSOR BRAND": "a" ,
// "PROCESSOR NAME": "a" ,
//  "PROCESSOR GEN": "a" ,
// "RAM GB": "a" ,
//  "RAM TYPE": "a" ,
//  SSD: "a" ,
//  HDD: "a" ,
//  OS: "a" ,
//  "OS BIT": "a",
// "GRAPHIC CARD GB": "a" ,
//  WEIGHT: "a" ,
//  "DISPLAY SIZE": "a" ,
//  WARRANTY: "a" ,
//  TOUCHSCREEN: "a" ,
//  MSOFFICE: "a" }

const LaptopPrice = () => {
  const header = {
    "Content-Type": "application/json",
  };
  const [laptopFeatures, setLaptopfeatures] = useState();
  const [finalPredictedPrice, setFinalPredictedPrice] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedFeatures, setSelectedfeatures] = useState({
    BRAND: "na",
    MODEL: "na",
    "PROCESSOR BRAND": "na",
    "PROCESSOR NAME": "na",
    "PROCESSOR GEN": "na",
    "RAM GB": "na",
    "RAM TYPE": "na",
    SSD: "na",
    HDD: "na",
    OS: "na",
    "OS BIT": "na",
    "GRAPHIC CARD GB": "na",
    WEIGHT: "na",
    "DISPLAY SIZE": "na",
    WARRANTY: "na",
    TOUCHSCREEN: "na",
    MSOFFICE: "na",
  });
  const clearFeaturesSelected = () => {
    setSelectedfeatures({
      BRAND: "na",
      MODEL: "na",
      "PROCESSOR BRAND": "na",
      "PROCESSOR NAME": "na",
      "PROCESSOR GEN": "na",
      "RAM GB": "na",
      "RAM TYPE": "na",
      SSD: "na",
      HDD: "na",
      OS: "na",
      "OS BIT": "na",
      "GRAPHIC CARD GB": "na",
      WEIGHT: "na",
      "DISPLAY SIZE": "na",
      WARRANTY: "na",
      TOUCHSCREEN: "na",
      MSOFFICE: "na",
    });
  };
  const getLaptopFeatures = async () => {
    const features = await axios.get(laptopFeaturesApi);
    setLaptopfeatures(features.data);

    features.data.map((item, index) => {
      Object.keys(item).forEach((k) => {});
    });
  };
  const handleDropdownChange = async (column, item) => {
    setErrorMessage("");
    // console.log(item, column);
    setSelectedfeatures({ ...selectedFeatures, [column]: item });
  };
  const predictPrice = async () => {
    // console.log(selectedFeatures);
    var count = 0;
    Object.keys(selectedFeatures).map(async (item, index) => {
      // console.log(selectedFeatures[item]);
      if (selectedFeatures[item] === "na") {
        count++;
      }
    });
    if (count > 0) {
      setErrorMessage("Please select all features.");
    } else {
      const predicted_response = await axios.post(
        predictPriceApi,
        selectedFeatures,
        {
          headers: header,
        }
      );
      // console.log(predicted_response.data);
      setFinalPredictedPrice(predicted_response.data);
    }
  };
  setTimeout(() => {
    setErrorMessage("");
  }, 1000);
  useEffect(() => {
    getLaptopFeatures();
  }, []);
  return (
    <div>
      <h3>Select Laptop features to predict price</h3>
      <div className="laptop__main">
        <div className="laptop__dropdown">
          {laptopFeatures &&
            laptopFeatures.map((feature, index) => {
              return (
                <div key={index} className="m-2">
                  {/* dropdown starts */}
                  <Dropdown className="">
                    <Dropdown.Toggle
                      variant="secondary"
                      id=""
                      className="dropdown_toggle"
                    >
                      {selectedFeatures[feature.column] !== "na"
                        ? selectedFeatures[feature.column]
                        : `--Select ${feature.column}--`}

                      {/* <FaCaretDown size={25} /> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="drop__down"
                      style={{
                        overflow: "scroll",
                        height: 500,
                        width: 300,
                        margin: 0,
                        alignItems: "center",
                      }}
                    >
                      <img id="searchIcon" src=""></img>
                      <input
                        className="form form-control search__text"
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                      {feature.value &&
                        feature.value
                          .filter((x) =>
                            x
                              .toString()
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          )
                          .map((item, index) => (
                            <div key={index}>
                              <Dropdown.Item
                                key={index}
                                eventKey={item}
                                onClick={() => {
                                  handleDropdownChange(feature.column, item);
                                }}
                                defaultValue={item}
                                className=""
                              >
                                {item}
                              </Dropdown.Item>
                              <Dropdown.Divider />
                            </div>
                          ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* dropdown ends */}
                </div>
              );
            })}
        </div>{" "}
        <div className="value">
          <span>Selected Value</span>

          <div className="value__details">
            {laptopFeatures &&
              laptopFeatures.map((feat, index) => {
                {
                  return (
                    <div key={index} className="selected__features">
                      <div className="feature__name">
                        <span>{feat.column}</span>
                      </div>
                      <div className="selected__name">
                        <span>{selectedFeatures[feat.column]}</span>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <div>
            <button
              className="btn btn-primary m-3"
              onClick={clearFeaturesSelected}
            >
              Clear All
            </button>{" "}
            <span className="text-danger" style={{ display: "block" }}>
              {errorMessage}
            </span>
          </div>
          <div className="btn__predicted__price">
            <button className="btn btn-primary m-1" onClick={predictPrice}>
              Predict Price
            </button>
            <h2>
              Pridicted Price:{" "}
              <span className="text-success">
                {finalPredictedPrice ? `AUD${finalPredictedPrice}` : "nan"}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopPrice;
