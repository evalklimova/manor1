document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthText = document.getElementById('birth')
    const birthplaceText = document.getElementById('birthplace');

    if (issuedText.innerText === 'ГУ МВД РОССИИ ПО Г. МОСКВЕ') {
        issuedText.innerText = 'GU MVD ROSSII PO G. MOSKVA';
        surnameText.innerText = 'KLIMOVA';
        nameText.innerText = 'EVELINA';
        patronymicText.innerText = 'ALEKSANDROVNA';
        genderText.innerText = 'FEMALE';
        birthText.innerText = '10.12.2003'
        birthplaceText.innerText = 'GOR. SANKT-PETERBURG';
    } else {
        issuedText.innerText = 'ГУ МВД РОССИИ ПО Г. МОСКВЕ';
        surnameText.innerText = 'КЛИМОВА';
        nameText.innerText = 'ЭВЕЛИНА';
        patronymicText.innerText = 'АЛЕКСАНДРОВНА';
        genderText.innerText = 'ЖЕН.';
        birthText.innerText = '10.12.2003'
        birthplaceText.innerText = 'ГОР. САНКТ-ПЕТЕРБУРГ';
    }
});