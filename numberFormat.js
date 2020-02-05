const { findCountryByIso, findCountryByDial } = require("./countries");

class PhoneFormat {
  /**
   * ⚡️ Will send you all the number format with the country data
   * @param {string} number accept number too and it's should have the phone number
   * @param {string} iso accept string only, it's should have the country code like iq usa etc...
   */
  static getAllFormats(number, iso) {
    let obj = {};
    number = this.convertNumbers2English(number);
    obj.isNumber = number.match(/[^0-9]/gi) == null;
    number = number.toString().replace(/[^0-9]/gi, "");
    number = this.normalize(number);
    let country = findCountryByIso(iso);
    let cleanNumber = this.normalize(number);
    let globalK = country.dial + cleanNumber;

    obj.globalZ = "00" + country.dial + cleanNumber;
    obj.globalP = "+" + country.dial + cleanNumber;
    obj.globalK = globalK;
    obj.domestic = "0" + cleanNumber;
    obj.domestic2 = cleanNumber;
    obj.format1 = this.format(globalK, "(NNN) NNN-NNNN");
    obj.format2 = this.format(globalK, "NNN.NNN.NNNN");
    obj.country = country;

    return obj;
  }

  /**
   * 🌏 Will try to know what country the number is belong to
   * @param {string} number accept number too and it's should have the phone number
   */
  static knowCountry(number) {
    number = this.convertNumbers2English(number);
    number = number.toString().replace(/[^0-9]/gi, "");
    if (`${number[0]}${number[1]}` == "00") number = number.substr(2);
    let str = "";
    for (let i = 0; i < 7; i++) {
      str = str + number[i];
      if (findCountryByDial(str)) return findCountryByDial(str);
    }
  }

  /**
   * 🧼 Will send a clean number without the extra keys
   * @param {string} number accept number too and it's should have the phone number
   */
  static normalize(phoneNumber) {
    return phoneNumber.replace(
      /^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "$1$2$3"
    );
  }

  /**
   * 😎 Will give you the cool formats for the number like '(964) 781-****'
   * @param {string} number accept number too and it's should have the phone number
   */
  static format(phoneNumber, formatString, options) {
    // Normalize the phone number first unless not asked to do so in the options
    if (!options || !options.normalize) {
      phoneNumber = this.normalize(phoneNumber);
    }
    for (var i = 0, l = phoneNumber.length; i < l; i++) {
      formatString = formatString.replace("N", phoneNumber[i]);
    }
    return formatString;
  }

  /**
   * 👳🏽‍♀️Arabic numbers to English
   * @param {String} string Any string
   */
  static convertNumbers2English(string) {
    return string
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(c) {
        return c.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(c) {
        return c.charCodeAt(0) - 1776;
      });
  }
}

module.exports = PhoneFormat;
