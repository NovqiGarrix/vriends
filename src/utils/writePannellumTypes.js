const { writeFileSync } = require("fs");

const indexDTS = `import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

type IPannellumProps = {
    children?: ReactNode,
    id?: string,
    width?: string,
    height?: string,
    image?: string,
    haov?: number,
    vaov?: number,
    vOffset?: number,
    yaw?: number,
    pitch?: number,
    hfov?: number,
    minHfov?: number,
    maxHfov?: number,
    minPitch?: number,
    maxPitch?: number,
    minYaw?: number,
    maxYaw?: number,
    autoRotate?: number,
    compass?: boolean,
    preview?: string,
    previewTitle?: string,
    previewAuthor?: string,
    title?: string,
    author?: string,
    autoLoad?: boolean,
    orientationOnByDefault?: boolean,
    showZoomCtrl?: boolean,
    keyboardZoom?: boolean,
    mouseZoom?: boolean,
    draggable?: boolean,
    disableKeyboardCtrl?: boolean,
    showFullscreenCtrl?: boolean,
    showControls?: boolean,
    onLoad?: () => void,
    onScenechange?: () => void,
    onScenechangefadedone?: () => void,
    onError?: () => void,
    onErrorcleared?: () => void,
    onMousedown?: () => void,
    onMouseup?: () => void,
    onTouchstart?: () => void,
    onTouchend?: () => void,
    hotspotDebug?: boolean,
    tooltip?: () => void,
    tooltipArg?: object,
    handleClick?: () => void,
    handleClickArg?: object,
    cssClass?: string,
    onRender?: () => void,
};

const defaultProps: IPannellumProps = {
    children: [],
    width: "100%",
    height: "400px",
    image: "",
    haov: 360,
    vaov: 180,
    vOffset: 0,
    yaw: 0,
    pitch: 0,
    hfov: 100,
    minHfov: 50,
    maxHfov: 150,
    minPitch: -90,
    maxPitch: 90,
    minYaw: -180,
    maxYaw: 180,
    autoRotate: 0,
    compass: false,
    preview: "",
    previewTitle: "",
    previewAuthor: "",
    title: "",
    author: "",
    autoLoad: false,
    orientationOnByDefault: false,
    showZoomCtrl: true,
    keyboardZoom: true,
    mouseZoom: true,
    draggable: true,
    disableKeyboardCtrl: false,
    showFullscreenCtrl: true,
    showControls: true,
    onLoad: () => { },
    onScenechange: () => { },
    onScenechangefadedone: () => { },
    onError: () => { },
    onErrorcleared: () => { },
    onMousedown: () => { },
    onMouseup: () => { },
    onTouchstart: () => { },
    onTouchend: () => { },
    hotspotDebug: false,
    onRender: undefined,
};

interface IPannellumHotspotProps {
    handleClick?: (event: PointerEvent, name: { name: string }) => void;
    type: string;
    pitch: number;
    yaw: number;
    name: string;
}

export declare let Pannellum: FunctionComponent<IPannellumProps> & {
    Hotspot: FunctionComponent<IPannellumHotspotProps & HTMLAttributes<HTMLDivElement>>;
}`;

writeFileSync("index.d.ts", indexDTS);

writeFileSync(
  "node_modules/@georgedrpg/pannellum-react-next/index.d.ts",
  indexDTS
);
