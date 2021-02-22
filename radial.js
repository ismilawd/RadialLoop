/**
 * @public
 * @param {{
 * items:HTMLElement[],
 * sliderWidth:number,
 * sliderHeight:number,
 * itemWidth:number
 * }} options 
 */
function MakeRadialLoop(options) {
    const {
        items,
        sliderWidth,
        sliderHeight,
        itemWidth
    } = options;
    for (let i = 0; i < items.length; i++) {

        let slide = items.item(i);
        let dec = true;
        const sw = sliderWidth;
        const sh = sliderHeight;
        const ratio = sh / sw;
        const iw = itemWidth;
        let lastLeft = sw + (i * iw * 2);

        setInterval(() => {
            if (dec) lastLeft -= 0.8;
            else lastLeft += 0.8;
            if (lastLeft >= sw) {
                dec = true;
            }
            if (lastLeft <= sw * -1) {
                dec = false;
                lastLeft = sw;
            }
            let left = lastLeft / 2;
            let top = Math.sqrt(Math.pow(sw / 2, 2) - Math.pow(left, 2));
            top *= ratio;
            top = (sh / 2) - top;

            left += (sw / 2) - (iw / 2);
            top -= iw / 2;
            // if (!onTop) {
            //     top *= -1;
            //     let toAdd = sh / 2;
            //     toAdd += toAdd / 2;
            //     top += toAdd;
            // }

            slide.style.top = `${top}px`;
            slide.style.left = `${left}px`;
        }, 1);
    }
}