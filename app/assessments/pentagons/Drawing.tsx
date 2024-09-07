import * as React from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Image from 'next/image'

const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
};


const PentagonCanvas: React.FC = () => {
    const canvas = React.useRef<ReactSketchCanvasRef>(null);

    const getFileName = () => {
        const date = new Date();
        return `drawing_${date.toISOString()}.png`;
    }

    const download = () => {
        canvas.current && canvas.current.exportImage("png").then(
            data => {
                console.log(data)
                const link = document.createElement('a');
                link.href = data;
                link.download = getFileName();
                link.click();
            }
        ).catch(
            error => {
                console.error(error)
            }
        )
    }
    return <div className="flex flex-row justify-between">
        <div style={{ height: '400px', width: '400px', position: 'relative' }}>
            <Image src="/pentagons.png"
                alt="Pentagons"
                objectFit='contain'
                layout="fill"
            />
        </div>
        <div className="grid grid-cols-5">
            <div className="col-span-5 col-start-1">
                <ReactSketchCanvas
                    ref={canvas}
                    style={styles}
                    width="700px"
                    height="500px"
                    strokeWidth={4}
                    strokeColor="black"
                />
            </div>
            <button
                className='btn col-start-5 text-neutral-700 border-solid border-2 hover:border-gray-500 rounded mt-2 px-3 py-1'
                onClick={download}>
                DOWNLOAD
            </button>
        </div>

    </div>
};

export { PentagonCanvas }