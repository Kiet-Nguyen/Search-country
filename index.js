const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const elements = {
  textInput: document.querySelector('.text-input'),
  resultsContainer: document.querySelector('.js-results'),
  radioButtons: document.myForm.radioButton,
  countResult: document.querySelector('.js-count-result')
};

const markup = `
  <div class="js-bg-color country">
    <span class="js-country-name text-color"></span>
  </div>
`;

// Generate random hexadecimal color
const randomHexaNumberGenerator = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

// Clear HTML
const clearInnerHTML = () => {
  elements.resultsContainer.innerHTML = ' ';
};

// Add HTML with background color and text content
const createElement = textContentValue => {
  elements.resultsContainer.insertAdjacentHTML('afterbegin', markup);

  const divEle = document.querySelector('.js-bg-color');
  const spanEle = document.querySelector('.js-country-name');

  divEle.style.backgroundColor = randomHexaNumberGenerator();
  spanEle.textContent = textContentValue;
};

const countSearchRes = (countNum, value) => {
  let tobe = '';
  let singOrPlural = '';

  countNum >= 0 && countNum <= 1
    ? ((tobe = 'is'), (singOrPlural = 'country'))
    : ((tobe = 'are'), (singOrPlural = 'countries'));

  elements.countResult.textContent = `There ${tobe} ${countNum} ${singOrPlural} starting with ${value}`;
};

/**
 * SEARCH WITH STARTING WORD
 */

const startingWord = () => {
  // If NOT radio button with value="start", don't run this function
  if (elements.radioButtons.value !== 'start') {
    return false;
  }
  clearInnerHTML();

  if (elements.textInput) {
    let inputValue = elements.textInput.value.toUpperCase();
    let count = 0;

    countries.map(currCountry => {
      let initialChar = currCountry.charAt(0).toUpperCase();

      if (inputValue === initialChar) {
        createElement(currCountry);
        count += 1;
      }
    });
    countSearchRes(count, inputValue);
  }
};

/**
 * SEARCH WITH ANY WORD
 */

const anyWord = () => {
  // If NOT radio button with value="any", don't run this function
  if (elements.radioButtons.value !== 'any') {
    return false;
  }
  clearInnerHTML();

  if (elements.textInput) {
    let inputValue = elements.textInput.value.toUpperCase();
    let count = 0;

    countries.map(currCountry => {
      let partOfCountryStr = currCountry.substring(0, inputValue.length);

      if (partOfCountryStr.toUpperCase() == inputValue) {
        createElement(currCountry);
        count += 1;
      }
    });

    countSearchRes(count, inputValue);

    // for (let index = 0; index < countries.length; index++) {
    //   let partOfCountryStr = countries[index].substring(0, inputValue.length);

    //   if (partOfCountryStr.toUpperCase() == inputValue.toUpperCase()) {
    //     createElement(countries[index]);
    //   }
    // }
  }
};

/**
 * CHANGE FUNCTION WITH RADIO BUTTON
 */

const switchFunc = value => {
  // Clear
  elements.textInput.value = '';
  clearInnerHTML();

  // Set maxlength for input field
  if (value === 'start') {
    elements.textInput.maxLength = 1;
  } else if (value === 'any') {
    elements.textInput.maxLength = 524288;
  }
};

const onInputChange = () => {
  startingWord();
  anyWord();
};
