export const convertF = (x) => {
    return convertC(x)*1.8 + 32;
}

export const convertC = (x) =>{
    return x - 273.15;
}