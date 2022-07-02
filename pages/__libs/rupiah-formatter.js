const rupiahFormatter = (inputString) => {
    if (inputString) {
        const format = inputString.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert?.join('.').split('').reverse().join('')
        return rupiah
    }
}
module.exports = rupiahFormatter;