const boot = () => {
    // check if config.js has been loaded
     if(!CONFIG_BASE) return;

    const elements = {
        title: document.querySelector("body > div > div.header > div.title > h2"),
        subtitle: document.querySelector("body > div > div.header > div.title > h5"),
        image: document.querySelector("body > div > div.header > div.logo"),
        //
        donate: document.querySelector("body > div > div.support"),
        donate_title: document.querySelector("body > div > div.support > span"),
        donate_button: document.querySelector("body > div > div.support > button"),
        owner: document.querySelector("body > div > div.footer > div > a"),
        //
        tabs: document.querySelector("body > div > div.content > div.tabs"),
        gapps_options: document.querySelector("#builds > div:nth-child(1) > div.expandable > div.download > select"),
    }

    const setupHeader = () => {
        const { title, subtitle, owner, donate, donate_title , donate_button, image } = elements;

        title.innerText = CONFIG_BASE.title;
        subtitle.innerText = CONFIG_BASE.subtitle;
        owner.innerText = CONFIG_BASE.owner;

        if(CONFIG_DATA.donate.enabled) {
            donate_title.innerText = CONFIG_DATA.donate.title;
            donate_button.innerText = CONFIG_DATA.donate.btn_label;
            donate_button.onclick = () => {
                location.href = CONFIG_DATA.donate.target;
            }
        } else {
            donate.style.display = "none";
        }

        if(CONFIG_BASE.image && CONFIG_BASE.image.includes('http')) {
            const imgEl = document.createElement("img");
            image.innerHTML = "";
            imgEl.setAttribute("src", CONFIG_BASE.image);
            imgEl.setAttribute("id", "los-logo");

            imgEl.style.marginBottom = "20px";
            imgEl.style.marginTop = "20px";

            imgEl.style.maxHeight = "100px";
            imgEl.style.maxWidth = "100px";

            if(CONFIG_UI.picture_rounded) {
                imgEl.style.borderRadius = "100px";
            }

            image.appendChild(imgEl);
        }
    };

    const setupBody = () => {
        document.getElementsByTagName("body")[0]
            .style.setProperty("--primaryColor", CONFIG_UI.primary_color)
    };

    const setupBuilds = () => {

        const { tabs, gapps_options } = elements;

        tabs.innerHTML = "";

        CONFIG_DATA.tabs.forEach((tab) => {

            const divEl = document.createElement("div");
            divEl.classList.add("tab");

            if(tab.default) {
                divEl.classList.add("active");
            }

            divEl.setAttribute("data-target", tab.id)

            divEl.innerText = tab.title;

            tabs.appendChild(divEl)
        });


        if(!CONFIG_DATA.show_gapps) {
            gapps_options.style.display = "none";
        }
    };



    setupHeader();
    setupBody();
    setupBuilds();
};

document.addEventListener("DOMContentLoaded", function() {
    boot();
})