function RNA(dnaStrand) {
    let rnaStrand = '';
    for ( let char of dnaStrand) {
        switch(char) {
            case 'G':
                rnaStrand += 'C';
                break;
                case 'C':
                    rnaStrand += 'G';
                    break;
                    case 'T':
                        rnaStrand += 'A';
                        break;
                        case 'A':
                            rnaStrand += 'U';
                            break;
                            default:
                                throw new Error('Invalid DNA character');
        }
}
return rnaStrand;
}

function DNA(rnaStrand) {
    let dnaStrand = '';
    for (let char of rnaStrand) {
        switch(char) {
            case 'C':
                dnaStrand += 'G';
                break;
                case 'G':
                    dnaStrand += 'C';
                    break;
                    case 'A':
                        dnaStrand += 'T';
                        break;
                        case 'U':
                            dnaStrand += 'A';
                            break;
                            default:
                                throw new Error('Invalid RNA character');
        }
    }
    return dnaStrand;
}

console.log(RNA("GCTA")); 
console.log(DNA("CGAU"));