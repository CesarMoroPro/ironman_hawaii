//! Import du fichier 
export function parallax() {
   
    /**
     * 
     * @param {HTMLElement} element
     * @param {Accumulator}
     * @return number
     */
    function offsetTop(element, acc = 0) {
        if (element.offsetParent) {
            return offsetTop(element.offsetParent, acc + element.offsetTop);
        }
        return acc + element.offsetTop;
    }


}