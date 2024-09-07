export const enterFullscreen = () => {
    const element = document.documentElement; // Select the entire document (you can also target specific elements)

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if ((element as any).mozRequestFullScreen) {
        // Firefox
        (element as any).mozRequestFullScreen();
    } else if ((element as any).webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
        // IE/Edge
        (element as any).msRequestFullscreen();
    }
};

// Function to exit fullscreen mode
export const exitFullscreen = () => {
    if (!document.fullscreenElement) {
        // early exit if no fullscreen element
        return 
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
        // Firefox
        (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
        // Chrome, Safari and Opera
        (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
        // IE/Edge
        (document as any).msExitFullscreen();
    }
};