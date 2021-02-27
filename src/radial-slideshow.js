class RadialSlideShow {
    /**
     * 
     * @param {{
     * itemsPerView: number,
     * container:HTMLElement,
     * items:[],
     * sliderWidth:number,
     * sliderHeight:number,
     * itemWidth:number,
     * offsetTop:number,
     * offsetLeft:number,
     * interval:number
     * }} options 
     */
    constructor(options) {
        this.options = options;
        this.currentItemIndex = 0;

        const deg = parseFloat(360) / parseFloat(this.options.itemsPerView);
        const ratio = options.sliderWidth / options.sliderWidth;
        const offsetLeft = (options.container.clientWidth / 2) - (options.sliderWidth / 2);
        const offsetTop = (options.container.clientHeight / 2) - (options.sliderHeight / 2);

        //setup first items
        for (let i = 0; i < this.options.itemsPerView; i++) {
            let cdeg = parseFloat(360) - (parseFloat(i) * deg);
            let elem = this.createItemElement(this.requestNextItem(), cdeg);

            let tr = Math.sin(cdeg * Math.PI / parseFloat(180));
            let lr = Math.cos(cdeg * Math.PI / parseFloat(180));
            let top = (tr * (options.sliderHeight / 2));
            let left = (options.sliderWidth / 2) + (lr * (options.sliderWidth / 2));
            top = (options.sliderHeight / 2) - top;
            top *= ratio;
            left -= options.itemWidth / 2;
            top -= options.itemWidth / 2;

            left += offsetLeft;
            top += offsetTop;

            if (options.offsetLeft)
                left += options.offsetLeft;

            if (options.offsetTop)
                top += options.offsetTop;

            elem.style.left = left + "px";
            elem.style.top = top + "px";
            this.options.container.prepend(elem);
        }
        setInterval(() => {
            let items = this.options.container.querySelectorAll(".slide-item");

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let ideg = parseFloat(item.getAttribute("deg"));
                ideg += 0.1;

                let tr = Math.sin(ideg * Math.PI / 180);
                let lr = Math.cos(ideg * Math.PI / 180);
                let top = (tr * (options.sliderHeight / 2));
                let left = (options.sliderWidth / 2) + (lr * (options.sliderWidth / 2));
                top = (options.sliderHeight / 2) - top;
                top *= ratio;
                left -= options.itemWidth / 2;
                top -= options.itemWidth / 2;

                left += offsetLeft;
                top += offsetTop;

                if (options.offsetLeft)
                    left += options.offsetLeft;

                if (options.offsetTop)
                    top += options.offsetTop;

                item.style.left = left + "px";
                item.style.top = top + "px";
                item.setAttribute("deg", ideg);
            }
        }, options.interval ?? 5);
    }

    /**
     * @param {{}} item 
     * @returns {HTMLDivElement}
     */
    createItemElement(item, deg) {
        let div = document.createElement("div");
        div.classList.add("slide-item");
        div.setAttribute("deg", deg);
        let img = document.createElement("img");
        img.src = item.image;
        div.appendChild(img);
        return div;
    }

    requestNextItem() {
        let item = this.options.items[this.currentItemIndex];
        this.currentItemIndex++;
        if (this.currentItemIndex === this.options.items.length)
            this.currentItemIndex = 0;
        return item;
    }
}
window.RadialSlideShow = RadialSlideShow;