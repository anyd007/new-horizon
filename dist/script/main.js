import './nav.js'
import './scroll.js'
import './media.js'
import './gallery.js'
import './about.js'

AOS.init();

document.querySelectorAll('img')
.forEach((img) =>
    img.addEventListener('load', () =>
        AOS.refresh()
    )
);