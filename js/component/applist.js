import json2html from "../json2html.js";
import openArrow from "./openArrow.js";

let j2h = new json2html();

let applist = {
    wa: {
        id: "wa",
        name: "WhatsApp",
        svg: '<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="white" />\n                  <path\n                      d="M8.82031 503.218L43.8192 376.262C22.238 339.026 10.8869 296.849 10.8948 253.927C10.8948 118.97 121.339 9.03339 256.917 9.03339C322.766 9.03339 384.466 34.5838 431.121 80.7701C454.05 103.529 472.217 130.537 484.584 160.249C496.951 189.961 503.275 221.794 503.194 253.927C503.194 388.897 392.764 498.834 257.171 498.834C215.963 498.834 175.517 488.502 139.473 468.899L8.82031 503.218Z"\n                      fill="url(#paint0_linear_13_21)" />\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="url(#paint1_linear_13_21)" />\n                  <path fill-rule="evenodd" clip-rule="evenodd"\n                      d="M193.397 147.606C188.739 137.023 183.546 136.772 179.143 136.772C175.248 136.506 171.099 136.506 166.696 136.506C162.547 136.506 155.547 138.056 149.592 144.507C143.622 150.957 127.294 166.19 127.294 197.423C127.294 228.642 150.114 258.841 153.218 262.96C156.323 267.093 197.292 333.161 262.096 358.712C316.02 379.864 326.915 375.745 338.586 374.447C350.242 373.162 376.167 359.228 381.614 344.247C386.794 329.545 386.794 316.644 385.241 314.061C383.689 311.478 379.272 309.928 373.048 306.577C366.571 303.478 335.467 288.008 329.497 285.928C323.542 283.861 319.393 282.828 315.244 289.027C311.094 295.478 298.915 309.677 295.02 313.796C291.393 317.929 287.513 318.445 281.289 315.346C274.797 312.26 254.334 305.544 229.948 283.861C211.037 267.093 198.336 246.192 194.441 239.993C190.814 233.542 193.919 230.191 197.292 227.092C200.142 224.258 203.783 219.608 206.888 215.992C209.993 212.376 211.023 209.542 213.366 205.409C215.44 201.29 214.396 197.409 212.844 194.323C211.291 191.475 199.098 160.256 193.397 147.606Z"\n                      fill="white" />\n                  <defs>\n                      <linearGradient id="paint0_linear_13_21" x1="255.958" y1="503.19" x2="255.958" y2="8.93564"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#20B038" />\n                          <stop offset="1" stop-color="#60D66A" />\n                      </linearGradient>\n                      <linearGradient id="paint1_linear_13_21" x1="255.958" y1="512.056" x2="255.958" y2="0.0698223"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#F9F9F9" />\n                          <stop offset="1" stop-color="white" />\n                      </linearGradient>\n                  </defs>\n              </svg>',
    },
    fb: {
        id: "fb",
        name: "Facebook",
        svg: '<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="white" />\n                  <path\n                      d="M8.82031 503.218L43.8192 376.262C22.238 339.026 10.8869 296.849 10.8948 253.927C10.8948 118.97 121.339 9.03339 256.917 9.03339C322.766 9.03339 384.466 34.5838 431.121 80.7701C454.05 103.529 472.217 130.537 484.584 160.249C496.951 189.961 503.275 221.794 503.194 253.927C503.194 388.897 392.764 498.834 257.171 498.834C215.963 498.834 175.517 488.502 139.473 468.899L8.82031 503.218Z"\n                      fill="url(#paint0_linear_13_21)" />\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="url(#paint1_linear_13_21)" />\n                  <path fill-rule="evenodd" clip-rule="evenodd"\n                      d="M193.397 147.606C188.739 137.023 183.546 136.772 179.143 136.772C175.248 136.506 171.099 136.506 166.696 136.506C162.547 136.506 155.547 138.056 149.592 144.507C143.622 150.957 127.294 166.19 127.294 197.423C127.294 228.642 150.114 258.841 153.218 262.96C156.323 267.093 197.292 333.161 262.096 358.712C316.02 379.864 326.915 375.745 338.586 374.447C350.242 373.162 376.167 359.228 381.614 344.247C386.794 329.545 386.794 316.644 385.241 314.061C383.689 311.478 379.272 309.928 373.048 306.577C366.571 303.478 335.467 288.008 329.497 285.928C323.542 283.861 319.393 282.828 315.244 289.027C311.094 295.478 298.915 309.677 295.02 313.796C291.393 317.929 287.513 318.445 281.289 315.346C274.797 312.26 254.334 305.544 229.948 283.861C211.037 267.093 198.336 246.192 194.441 239.993C190.814 233.542 193.919 230.191 197.292 227.092C200.142 224.258 203.783 219.608 206.888 215.992C209.993 212.376 211.023 209.542 213.366 205.409C215.44 201.29 214.396 197.409 212.844 194.323C211.291 191.475 199.098 160.256 193.397 147.606Z"\n                      fill="white" />\n                  <defs>\n                      <linearGradient id="paint0_linear_13_21" x1="255.958" y1="503.19" x2="255.958" y2="8.93564"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#20B038" />\n                          <stop offset="1" stop-color="#60D66A" />\n                      </linearGradient>\n                      <linearGradient id="paint1_linear_13_21" x1="255.958" y1="512.056" x2="255.958" y2="0.0698223"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#F9F9F9" />\n                          <stop offset="1" stop-color="white" />\n                      </linearGradient>\n                  </defs>\n              </svg>',
    },
    tw: {
        id: "tw",
        name: "Twitter",
        svg: '<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="white" />\n                  <path\n                      d="M8.82031 503.218L43.8192 376.262C22.238 339.026 10.8869 296.849 10.8948 253.927C10.8948 118.97 121.339 9.03339 256.917 9.03339C322.766 9.03339 384.466 34.5838 431.121 80.7701C454.05 103.529 472.217 130.537 484.584 160.249C496.951 189.961 503.275 221.794 503.194 253.927C503.194 388.897 392.764 498.834 257.171 498.834C215.963 498.834 175.517 488.502 139.473 468.899L8.82031 503.218Z"\n                      fill="url(#paint0_linear_13_21)" />\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="url(#paint1_linear_13_21)" />\n                  <path fill-rule="evenodd" clip-rule="evenodd"\n                      d="M193.397 147.606C188.739 137.023 183.546 136.772 179.143 136.772C175.248 136.506 171.099 136.506 166.696 136.506C162.547 136.506 155.547 138.056 149.592 144.507C143.622 150.957 127.294 166.19 127.294 197.423C127.294 228.642 150.114 258.841 153.218 262.96C156.323 267.093 197.292 333.161 262.096 358.712C316.02 379.864 326.915 375.745 338.586 374.447C350.242 373.162 376.167 359.228 381.614 344.247C386.794 329.545 386.794 316.644 385.241 314.061C383.689 311.478 379.272 309.928 373.048 306.577C366.571 303.478 335.467 288.008 329.497 285.928C323.542 283.861 319.393 282.828 315.244 289.027C311.094 295.478 298.915 309.677 295.02 313.796C291.393 317.929 287.513 318.445 281.289 315.346C274.797 312.26 254.334 305.544 229.948 283.861C211.037 267.093 198.336 246.192 194.441 239.993C190.814 233.542 193.919 230.191 197.292 227.092C200.142 224.258 203.783 219.608 206.888 215.992C209.993 212.376 211.023 209.542 213.366 205.409C215.44 201.29 214.396 197.409 212.844 194.323C211.291 191.475 199.098 160.256 193.397 147.606Z"\n                      fill="white" />\n                  <defs>\n                      <linearGradient id="paint0_linear_13_21" x1="255.958" y1="503.19" x2="255.958" y2="8.93564"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#20B038" />\n                          <stop offset="1" stop-color="#60D66A" />\n                      </linearGradient>\n                      <linearGradient id="paint1_linear_13_21" x1="255.958" y1="512.056" x2="255.958" y2="0.0698223"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#F9F9F9" />\n                          <stop offset="1" stop-color="white" />\n                      </linearGradient>\n                  </defs>\n              </svg>',
    },
};

function get_applist_html() {
    let appids = Object.keys(applist),
        output = [];
    for (let index = 0; index < appids.length; index++) {
        let appid = appids[index];
        output.push(
            j2h.div({ class: "applist-item" }, [
                j2h.div({ class: "icon-n-name" }, [
                    j2h.div({ class: "app-icon" }, applist[appid].svg),
                    j2h.div({ class: "app-name" }, applist[appid].name),
                ]),
                j2h.div({ class: "open-arrow" }, openArrow),
            ])
        );
    }
    return output;
}

export { applist, get_applist_html };

// export default '<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="white" />\n                  <path\n                      d="M8.82031 503.218L43.8192 376.262C22.238 339.026 10.8869 296.849 10.8948 253.927C10.8948 118.97 121.339 9.03339 256.917 9.03339C322.766 9.03339 384.466 34.5838 431.121 80.7701C454.05 103.529 472.217 130.537 484.584 160.249C496.951 189.961 503.275 221.794 503.194 253.927C503.194 388.897 392.764 498.834 257.171 498.834C215.963 498.834 175.517 488.502 139.473 468.899L8.82031 503.218Z"\n                      fill="url(#paint0_linear_13_21)" />\n                  <path\n                      d="M0 512L36.2972 380.646C13.9815 342.067 2.27439 298.376 2.34267 253.927C2.07453 113.804 116.4 0 256.917 0C325.095 0 389.123 26.3183 437.345 74.3197C485.567 122.321 512 186.057 512 253.927C512 393.798 397.689 507.616 257.171 507.616C214.564 507.671 172.642 497.015 135.338 476.648L0 512ZM141.308 430.965L149.084 435.614C181.704 454.839 218.962 465.002 256.931 465.032C373.585 465.032 468.731 370.314 468.731 254.192C468.731 197.925 446.702 144.772 406.777 105.022C366.825 65.3002 313.424 43.1007 256.903 43.1007C139.981 43.1007 44.8353 137.819 44.8353 253.941C44.8353 293.69 55.9841 332.658 77.2516 366.195L82.1768 374.209L60.6553 452.145L141.28 430.979L141.308 430.965Z"\n                      fill="url(#paint1_linear_13_21)" />\n                  <path fill-rule="evenodd" clip-rule="evenodd"\n                      d="M193.397 147.606C188.739 137.023 183.546 136.772 179.143 136.772C175.248 136.506 171.099 136.506 166.696 136.506C162.547 136.506 155.547 138.056 149.592 144.507C143.622 150.957 127.294 166.19 127.294 197.423C127.294 228.642 150.114 258.841 153.218 262.96C156.323 267.093 197.292 333.161 262.096 358.712C316.02 379.864 326.915 375.745 338.586 374.447C350.242 373.162 376.167 359.228 381.614 344.247C386.794 329.545 386.794 316.644 385.241 314.061C383.689 311.478 379.272 309.928 373.048 306.577C366.571 303.478 335.467 288.008 329.497 285.928C323.542 283.861 319.393 282.828 315.244 289.027C311.094 295.478 298.915 309.677 295.02 313.796C291.393 317.929 287.513 318.445 281.289 315.346C274.797 312.26 254.334 305.544 229.948 283.861C211.037 267.093 198.336 246.192 194.441 239.993C190.814 233.542 193.919 230.191 197.292 227.092C200.142 224.258 203.783 219.608 206.888 215.992C209.993 212.376 211.023 209.542 213.366 205.409C215.44 201.29 214.396 197.409 212.844 194.323C211.291 191.475 199.098 160.256 193.397 147.606Z"\n                      fill="white" />\n                  <defs>\n                      <linearGradient id="paint0_linear_13_21" x1="255.958" y1="503.19" x2="255.958" y2="8.93564"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#20B038" />\n                          <stop offset="1" stop-color="#60D66A" />\n                      </linearGradient>\n                      <linearGradient id="paint1_linear_13_21" x1="255.958" y1="512.056" x2="255.958" y2="0.0698223"\n                          gradientUnits="userSpaceOnUse">\n                          <stop stop-color="#F9F9F9" />\n                          <stop offset="1" stop-color="white" />\n                      </linearGradient>\n                  </defs>\n              </svg>';
