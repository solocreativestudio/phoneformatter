<div style="text-align:start">
<img width="300px" src="https://i.ibb.co/6rg1TMj/Screen-Shot-2020-02-05-at-9-46-52-PM.png" />
</div>

## Phone Number Formater

This package is all what you need to enhance, validate, and format your phone numbers. FOR ALL COUNTRIES! 😍

### Quick Start ⚡️

- Install the package using the below script:

```
$ npm i -S @solocreativestudio/phoneformatter
```

- Import the package helper class in the old way:

```javascript
const PhoneFormat = require("@solocreativestudio/phoneformatter");
```

or in the new way

```javascript
import * as PhoneFormat from "@solocreativestudio/phoneformatter";
```

or you can get it directly to your vanilla js:

```javascript
<script src="https://codepen.io/Hamdongunner/pen/xxGxwZM.js"></script>
```

- Use the function `getAllFormats` to get all possible formats for your phone. It accepts two arguments the first one is the number the second one it the country [iso3](https://github.com/solocreativestudio/phoneformatter/blob/master/countries.js) (code)
  ex:

```javascript
PhoneFormat.getAllFormats("٠٧٨١٠٠٠٠٩٨٣", "iq");
// returns
 { isNumber: true,
  globalZ: '009647810000983',
  globalP: '+9647810000983',
  globalK: '9647810000983',
  domistic: '07810000983',
  domistic2: '7810000983',
  format1: '(781) 000-0983',
  format2: '781.000.0983',
  country:
   { iso2: 'IQ',
     name: 'Iraq',
     iso3: 'IRQ',
     unicode: '🇮🇶',
     dial: '964',
     currency: 'IQD',
     capital: 'Baghdad',
     continent: 'AS',
     min: 8
   }
}
```

The number accept all kind of string or numbers you can send a string like `+(964) 000-0000`, `٠٨٩٠٠٨٨٧٧٦٦٢`, `987624k3434`

- You can also use the function `knowCountry` which accepts a number and it will return the country object. ex:

```javascript
PhoneFormat.knowCountry("9633984049")
// returns
{ iso2: 'SY',
  name: 'Syria',
  iso3: 'SYR',
  unicode: '🇸🇾',
  dial: '963',
  currency: 'SYP',
  capital: 'Damascus',
  continent: 'AS'
}

// Another ex
PhoneFormat.knowCountry("1-23349385")
// returns
{ iso2: 'CA',
  name: 'Canada',
  iso3: 'CAN',
  unicode: '🇨🇦',
  dial: '1',
  currency: 'CAD',
  capital: 'Ottawa',
  continent: 'NA'
}
```

You can check your country iso code from this [link](https://github.com/solocreativestudio/phoneformatter/blob/master/countries.js)

Contact us if you need any other features using this email 😁
`hamdon@solostudio.co` 😎
