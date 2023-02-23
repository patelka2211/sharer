import cdn from "../cdn";
import j2h from "../j2h";

function getCDNsvgs(filename: string) {
    return j2h.element("img", {
        src: cdn.getPath(["assets", filename]),
    });
}

const svgs = {
    local: {
        sharerIcon: `<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="512" height="512" rx="116" fill="white" /> <g clip-path="url(#clip0_270_65)"> <path d="M255.086 77.7143C207.881 77.9564 162.699 96.9092 129.449 130.416C96.1985 163.924 77.5938 209.25 77.7148 256.455C77.8359 303.66 96.6728 348.89 130.095 382.226C163.516 415.562 208.795 434.283 256 434.283C303.205 434.283 348.483 415.562 381.905 382.226C415.327 348.89 434.164 303.66 434.285 256.455C434.406 209.25 415.801 163.924 382.551 130.416C349.301 96.9092 304.119 77.9564 256.914 77.7143H255.086Z" stroke="#E8DBFF" stroke-width="26" /> <path d="M256 77.7143V434.286M434.286 256H77.7142M117.943 146.286C158.238 175.033 206.502 190.484 256 190.484C305.498 190.484 353.762 175.033 394.057 146.286M394.057 365.714C353.762 336.967 305.498 321.516 256 321.516C206.502 321.516 158.238 336.967 117.943 365.714M242.286 82.2857C216.879 103.742 196.461 130.484 182.455 160.645C168.448 190.806 161.192 223.66 161.192 256.914C161.192 290.169 168.448 323.023 182.455 353.184C196.461 383.345 216.879 410.087 242.286 431.543M269.714 431.543C295.121 410.087 315.539 383.345 329.545 353.184C343.551 323.023 350.808 290.169 350.808 256.914C350.808 223.66 343.551 190.806 329.545 160.645C315.539 130.484 295.121 103.742 269.714 82.2857" stroke="#E8DBFF" stroke-width="18" /> </g> <g filter="url(#filter0_dii_270_65)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M277.709 221.623C277.709 227.787 282.702 232.785 288.865 232.793H295.891C305.265 232.793 309.952 232.793 313.52 234.647C316.526 236.208 318.978 238.66 320.539 241.666C322.393 245.234 322.393 249.921 322.393 259.295V329.917C322.393 339.291 322.393 343.978 320.539 347.546C318.978 350.552 316.526 353.003 313.52 354.565C309.952 356.418 305.265 356.418 295.891 356.418H214.843C205.469 356.418 200.782 356.418 197.214 354.565C194.208 353.003 191.757 350.552 190.195 347.546C188.342 343.978 188.342 339.291 188.342 329.917V259.295C188.342 249.921 188.342 245.234 190.195 241.666C191.757 238.66 194.208 236.208 197.214 234.647C200.782 232.793 205.469 232.793 214.843 232.793H221.877C228.036 232.781 233.025 227.784 233.025 221.623C233.025 215.461 228.037 210.465 221.879 210.452H214.3C197.215 210.452 188.673 210.452 182.171 213.829C176.691 216.676 172.224 221.143 169.378 226.622C166 233.125 166 241.667 166 258.752V330.46C166 347.545 166 356.087 169.378 362.589C172.224 368.069 176.691 372.536 182.171 375.382C188.673 378.76 197.215 378.76 214.3 378.76H297.179C314.264 378.76 322.806 378.76 329.309 375.382C334.788 372.536 339.255 368.069 342.102 362.589C345.479 356.087 345.479 347.545 345.479 330.46V258.752C345.479 241.667 345.479 233.125 342.102 226.622C339.255 221.143 334.788 216.676 329.309 213.829C322.806 210.452 314.264 210.452 297.179 210.452H288.855C282.697 210.465 277.709 215.461 277.709 221.623Z" fill="#5900FF" /> <rect x="244.569" y="137.468" width="22.3418" height="165.329" rx="11.1709" fill="#5900FF" /> <path d="M247.833 140.783C250.634 138.026 252.035 136.647 253.649 136.142C255.01 135.716 256.469 135.716 257.83 136.142C259.445 136.647 260.845 138.026 263.646 140.783L280.957 157.824C287.163 163.933 290.266 166.988 290.456 169.62C290.615 171.804 289.741 173.937 288.096 175.383C286.114 177.125 281.759 177.125 273.05 177.125H238.429C229.72 177.125 225.366 177.125 223.383 175.383C221.738 173.937 220.865 171.804 221.023 169.62C221.213 166.988 224.316 163.933 230.523 157.824L247.833 140.783Z" fill="#5900FF" /> </g> <defs> <filter id="filter0_dii_270_65" x="150" y="125.823" width="211.479" height="274.937" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="6" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="out" /> <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0 0 0 0 0 1 0 0 0 0.32 0" /> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_65" /> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_65" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dx="10" dy="10" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.858824 0 0 0 0 1 0 0 0 0.32 0" /> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_270_65" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dx="-10" dy="-10" /> <feGaussianBlur stdDeviation="8" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" /> <feBlend mode="normal" in2="effect2_innerShadow_270_65" result="effect3_innerShadow_270_65" /> </filter> <clipPath id="clip0_270_65"> <rect width="384" height="384" fill="white" transform="translate(64 64)" /> </clipPath> </defs> </svg>`,
        closeIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.6894 8.3212C21.2753 7.90709 20.6064 7.90709 20.1923 8.3212L15 13.5028L9.80774 8.31058C9.39363 7.89647 8.72469 7.89647 8.31058 8.31058C7.89647 8.72469 7.89647 9.39363 8.31058 9.80774L13.5028 15L8.31058 20.1923C7.89647 20.6064 7.89647 21.2753 8.31058 21.6894C8.72469 22.1035 9.39363 22.1035 9.80774 21.6894L15 16.4972L20.1923 21.6894C20.6064 22.1035 21.2753 22.1035 21.6894 21.6894C22.1035 21.2753 22.1035 20.6064 21.6894 20.1923L16.4972 15L21.6894 9.80774C22.0929 9.40425 22.0929 8.72469 21.6894 8.3212Z" fill="#848388" /> </svg>`,
        arrowLeftIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3873 8.38747C18.8748 8.87497 18.8748 9.66247 18.3873 10.15L13.5373 15L18.3873 19.85C18.8748 20.3375 18.8748 21.125 18.3873 21.6125C17.8998 22.1 17.1123 22.1 16.6248 21.6125L10.8873 15.875C10.3998 15.3875 10.3998 14.6 10.8873 14.1125L16.6248 8.37497C17.0998 7.89997 17.8998 7.89997 18.3873 8.38747Z" fill="#91918E" /></svg>`,
        arrowRightIcon: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.6127 8.38747C11.1252 8.87497 11.1252 9.66247 11.6127 10.15L16.4627 15L11.6127 19.85C11.1252 20.3375 11.1252 21.125 11.6127 21.6125C12.1002 22.1 12.8877 22.1 13.3752 21.6125L19.1127 15.875C19.6002 15.3875 19.6002 14.6 19.1127 14.1125L13.3752 8.37497C12.9002 7.89997 12.1002 7.89997 11.6127 8.38747Z" fill="#91918E" /></svg>`,
    },
    cdn: (function (obj: { [_: string]: any })  {
        [
            "wa",
            "fb",
            "tw",
            "eml",
            "lnkdn",
            "pntrst",
            "rdt",
            "snpcht",
            "koo",
            "tg",
        ].forEach((app) => {
            obj[app] = getCDNsvgs(`${app}Icon.svg`);
        });
        return obj;
    })({}),
};

export default svgs;
