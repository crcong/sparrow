
const _preloadAllImages = (images: string[]) => {
  return images.map(image => {
    const img = new Image()
    img.src = image
    return img
  })
}

// Object.keys(import.meta.glob('/public/images/*.png')).map(path => path.replace('/public', ''))
export function preloadAllImages() {
  _preloadAllImages([
    '/images/1B.png',
    '/images/1T.png',
    '/images/1W.png',
    '/images/2B.png',
    '/images/2T.png',
    '/images/2W.png',
    '/images/3B.png',
    '/images/3T.png',
    '/images/3W.png',
    '/images/4B.png',
    '/images/4T.png',
    '/images/4W.png',
    '/images/5B.png',
    '/images/5T.png',
    '/images/5W.png',
    '/images/6B.png',
    '/images/6T.png',
    '/images/6W.png',
    '/images/7B.png',
    '/images/7T.png',
    '/images/7W.png',
    '/images/8B.png',
    '/images/8T.png',
    '/images/8W.png',
    '/images/9B.png',
    '/images/9T.png',
    '/images/9W.png',
    '/images/BB.png',
    '/images/BF.png',
    '/images/DF.png',
    '/images/FC.png',
    '/images/HZ.png',
    '/images/NF.png',
    '/images/winner.png',
    '/images/XF.png',
  ])
}
