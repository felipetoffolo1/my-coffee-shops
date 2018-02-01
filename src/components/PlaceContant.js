import React from "react";
import "./CustomInfoWindow.scss";

const PlaceContact = props => {
  /** Make a object with the contact info
   * @param {string} type - Type of contact ex: facebook
   * @param {string} address - Contact adrdress
   * @returns {object} contact info
   */
  const getInfo = (type, address) => {
    let contact = {
      type: type,
      icon: `fa-${type}`,
      show: false
    };
    switch (type) {
      case "instagram":
        contact.link = `http://instagram.com/${address}`;
        contact.show = true;
        break;
      case "twitter":
        contact.link = `http://twitter.com/${address}`;
        contact.show = true;
        break;
      case "formattedPhone":
        contact.link = address;
        contact.show = true;
        contact.icon = "fa-phone";
        break;
      case "website":
        contact.link = address;
        contact.show = true;
        contact.icon = "fa-link";
        break;
      default:
        break;
    }
    return contact;
  };
  const contact = getInfo(props.type, props.address);
  return contact.show ? (
    <li key={props.type} className="contact">
      <a target="_blank" href={contact.link}>
        <i className={"fa " + contact.icon} />
      </a>
    </li>
  ) : (
    ""
  );
};

export default PlaceContact;
