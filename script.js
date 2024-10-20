document.addEventListener('DOMContentLoaded', () => {
    // Declaring Variables
    const eng = document.getElementById('eng')
    const spanish = document.getElementById('spanish')
    const physics = document.getElementById('physics')
    const chem = document.getElementById('chem')
    const bio = document.getElementById('bio')
    const cs = document.getElementById('cs')
    const geo = document.getElementById('geo')
    const ssp = document.getElementById('ssp')
    const maths = document.getElementById('maths')
    const outschool = document.getElementById('outschool')
    const spanishacademy = document.getElementById('spanishacademy')

    maths.value = localStorage.getItem('maths')
    eng.value = localStorage.getItem('eng')
    spanish.value = localStorage.getItem('spanish')
    physics.value = localStorage.getItem('physics')
    chem.value = localStorage.getItem('chem')
    bio.value = localStorage.getItem('bio')
    cs.value = localStorage.getItem('cs')
    geo.value = localStorage.getItem('geo')
    ssp.value = localStorage.getItem('ssp')
    outschool.value = localStorage.getItem('outschool')
    spanishacademy.value = localStorage.getItem('spanishacademy')

    function save() {
        localStorage.setItem('eng', eng.value)
        localStorage.setItem('spanish', spanish.value)
        localStorage.setItem('physics', physics.value)
        localStorage.setItem('chem', chem.value)
        localStorage.setItem('bio', bio.value)
        localStorage.setItem('cs', cs.value)
        localStorage.setItem('geo', geo.value)
        localStorage.setItem('ssp', ssp.value)
        localStorage.setItem('maths', maths.value)
        localStorage.setItem('outschool', outschool.value)
        localStorage.setItem('spanishacademy', spanishAcademy.value)
    }
    document.querySelector('button').onclick = save

    
})


function codeDetection(code) {
    if (code.includes('bio') && code.includes('chem') && code.includes('cs') && code.includes('eng') && code.includes('geo') && code.includes('maths') && code.includes('physics') && code.includes('spanish') && code.includes('ssp') && code.includes('outschool') && code.includes('spanishacademy')){
        console.log("Pass")
        function findAllValuesBetween(str, startSubstring, endSubstring) {
            const results = [];
            let startIndex = str.indexOf(startSubstring);
            
            while (startIndex !== -1) {
                // Find the index of the ending substring after the current starting index
                const endIndex = str.indexOf(endSubstring, startIndex);
                
                // Check if the ending substring is found
                if (endIndex !== -1) {
                    // Calculate the start index for extraction
                    const extractStartIndex = startIndex + startSubstring.length;
                    const value = str.substring(extractStartIndex, endIndex).trim();
                    results.push(value);
                }
                
                // Move to the next occurrence of the starting substring
                startIndex = str.indexOf(startSubstring, startIndex + 1);
            }
            
            return results;
        }
        
        // Example usage

        
        const exampleString = code;
        const results = findAllValuesBetween(exampleString, "=", "+");
        var textToCopy = document.getElementById('code');
        console.log(results)
        bio.value = bio.value + " " + results[0]
        chem.value = chem.value + " " + results[1]
        cs.value = cs.value + " " + results[2]
        eng.value = eng.value + " " + results[3]
        geo.value = geo.value + " " + results[4]
        maths.value = maths.value + " " + results[5]
        physics.value = physics.value + " " + results[6]
        spanish.value = spanish.value + " " + results[7]
        ssp.value = ssp.value + " " + results[8]
        outschool.value = outschool.value + " " + results[9]
        spanishacademy.value = spanishacademy.value + " " + results[10]


    } else {
        console.log('Fail');
    }
    
}


function copyAndGenerate() {
    var textToCopy = document.getElementById('code');
    var codes = `bio=${bio.value}+chem=${chem.value}+cs=${cs.value}+eng=${eng.value}+geo=${geo.value}+maths=${maths.value}+physics=${physics.value}+spanish=${spanish.value}+ssp=${ssp.value}+outschool=${outschool.value}+spanishacademy=${spanishacademy.value}+balance=+`
    textToCopy.innerText = `${codes}`
    navigator.clipboard.writeText(textToCopy.innerHTML);
    alert(`Copied: ${textToCopy.innerHTML}`);
}

function checkCode() {
    var checksCode = document.getElementById('checksCode').value
    codeDetection(checksCode)
}