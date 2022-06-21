module.exports = function toReadable (number) {
  number = number.toString();
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number == 0) {
    return 'zero';
  }

  let dozen = '';
  let one = ones[number[number.length - 1]];
  
  if (number.length >= 2) {
    if (number[number.length - 2] === '1') {
      dozen = tens[number[number.length - 1]];
      one = '';
    } else {
      dozen = dozens[number[number.length - 2]];
    }
  }

  const hundred = number.length === 3 ? `${ones[number[number.length - 3]]} hundred` : '';

  return `${hundred} ${dozen} ${one}`.trim().replace(/ +(?= )/g,'');
}
