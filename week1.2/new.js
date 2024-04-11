// const date = new Date();
// console.log(date.toLocaleString());

function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    console.log("Cleaned string 1:", cleanStr1);
    console.log("Cleaned string 2:", cleanStr2);

    // Sort the strings alphabetically
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    console.log("Sorted string 1:", sortedStr1);
    console.log("Sorted string 2:", sortedStr2);

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

function main()
{
    isAnagram("openai!","openai");
}

main();