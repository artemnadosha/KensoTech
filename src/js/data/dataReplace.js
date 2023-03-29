
export const replaceData = (arr) => {
    arr.forEach(items => {
        const replace = items.images.replace('./img/', './dist/img/')
        items.images = replace
    })
}

