/**
 * Averiguar el valor de la carta cogida
 * @param {String} carta Carta cogida del deck
 * @returns {Number} Valor de la carta cogida
 */
export const valorCarta = ( carta ) => {
    if (!carta) throw new Error('La carta tiene que tener un valor');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}