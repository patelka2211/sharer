import { render, tag } from "@patelka2211/dominar";
import html2canvas from "html2canvas";
import { sharerDownloadableComponentElement } from "../../elements/sharerDownloadable";

export function downloadSharerQR(website: string, platform: string) {
    let element = sharerDownloadableComponentElement();

    if (element !== null)
        html2canvas(element, {
            width: element.clientWidth,
            height: element.clientHeight,
        }).then(function (canvas) {
            render(
                document.body,
                tag("a", {
                    attributes: {
                        id: "temporary-SharerQR",
                        download: `${`SharerQR ${website} ${platform}`
                            .replaceAll(" ", "-")
                            .replaceAll(".", "_")}.png`,
                        href: canvas.toDataURL("image/png"),
                        target: "_blank",
                    },
                }),
                {
                    clearBeforeRender: false,
                    insertType: "append",
                }
            ).then(() => {
                ((link) => {
                    link?.click();
                    link?.remove();
                })(document.getElementById("temporary-SharerQR"));
            });
        });
}
