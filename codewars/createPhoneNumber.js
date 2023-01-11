function createPhoneNumber(numbers) {
    //array og 10 integers is out input
    //travel through the array
    //add (
    //add first three itegers in the resulting string
    //) ' ' 
    //travel through the array, add next three integers and then a - 
    //add the rest

    //splice method.

    let phoneNumber = '(';
    phoneNumber += numbers.splice(0,3).join('');
    phoneNumber += ') ';
    phoneNumber += numbers.splice(0,3).join('');
    phoneNumber += '-';
    phoneNumber += numbers.splice(0).join('');
    return phoneNumber;
}