import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Image from 'next/image'

const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
};

const Canvas = () => {
    return <div className="flex flex-row justify-between">
        <div style={{ height: '400px', width: '400px', position: 'relative' }}>
            <Image src="/pentagons.png"
                alt="Pentagons"
                objectFit='contain'
                layout="fill"
            />
        </div>
        <ReactSketchCanvas
            style={styles}
            width="700px"
            height="500px"
            strokeWidth={4}
            strokeColor="black" />
    </div>
};

export default Canvas;