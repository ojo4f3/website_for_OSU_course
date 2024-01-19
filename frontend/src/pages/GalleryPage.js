import React from "react";
import ImageGallery from "react-image-gallery";

const art_images = [
    {
        original: 'images/abraham-lincoln-pencil-drawing-400.png',
        thumbnail: 'images/abraham-lincoln-pencil-drawing-400.png',
        description: 'Pencil drawing of Abraham Lincoln (pencil drawing)',
        originalHeight: '581px',
    },
    {
        original: 'images/american-bulldog-pencil-drawing-400.png',
        thumbnail: 'images/american-bulldog-pencil-drawing-400.png',
        description: 'American Bulldog Portrait (pencil drawing)',
        originalHeight: '541px',
    },    
    {
        original: 'images/fox-in-snow-pen-drawing-400.png',
        thumbnail: 'images/fox-in-snow-pen-drawing-400.png',
        description: 'Winter Fox (ink drawing)',
        originalHeight: '320px',
    },    
    {
        original: 'images/european-robin-on-a-branch-400.png',
        thumbnail: 'images/european-robin-on-a-branch-400.png',
        description: 'European Robin (ballpoint pen drawing)',
        originalHeight: '253px',
    },    
    {
        original: 'images/color-squares-400.jpg',
        thumbnail: 'images/color-squares-400.jpg',
        description: 'Color Squares (digital illustration)',
        originalHeight: '154px',
    },    
    {
        original: 'images/purple-stag-beettle-400.jpg',
        thumbnail: 'images/purple-stag-beettle-400.jpg',
        description: 'Stag Beetle (digital illustration)',
        originalHeight: '238px',
    },    
    {
        original: 'images/fox-stalking-swan-nest-400.jpg',
        thumbnail: 'images/fox-stalking-swan-nest-400.jpg',
        description: 'Stalking Fox (digital illustration)',
        originalHeight: '288px',
    },    
    {
        original: 'images/gnome-in-woods-negative-focal-point-400.jpg',
        thumbnail: 'images/gnome-in-woods-negative-focal-point-400.jpg',
        description: 'Forest Gnome (digital illustrations)',
        originalHeight: '399px',
    },    
    {
        original: 'images/bleak-snow-storm-antartica-400.jpg',
        thumbnail: 'images/bleak-snow-storm-antartica-400.jpg',
        description: 'Bleak (digital painting)',
        originalHeight: '291px',
    },    
    {
        original: 'images/chicks-hawk-digital-painting-400.jpg',
        thumbnail: 'images/chicks-hawk-digital-painting-400.jpg',
        description: 'Baby Bird in Danger (digital painting)',
        originalHeight: '280px',
    },
]

function GalleryPage() {
    return (
        <>
            <h2>Original Artwork</h2>
            <article>
                <p>A sample of my artwork in various medias spanning 2019 to 2021:</p>
            </article>
            <article>
                <ImageGallery items={art_images} showThumbnails={false} />
            </article>
        </>
    );
}

export default GalleryPage;