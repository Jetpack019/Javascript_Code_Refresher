function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}