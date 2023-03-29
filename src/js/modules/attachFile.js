const fileContainer = document.querySelector('.file-wrapper');
const fileLoadMobile = document.querySelector('.file-load-mobile');
const fileLoad = document.querySelector('.file-drop');
// let dropArea = document.getElementById('.file-wrapper')

export const attachFile = () => {
    fileContainer.addEventListener('change', () => {
        const fileInput = document.querySelector('.user-file');
        const getNameFile = fileInput.value.split('\\')

        fileLoadMobile.innerText = getNameFile[getNameFile.length - 1];
        fileLoad.innerText = getNameFile[getNameFile.length - 1];

        if(!fileInput.value) {
            fileLoadMobile.innerText = 'your files here';
            fileLoad.innerText = 'or drop your files here';
        }
    })
}

export const attachDropFile = () => {

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileContainer.addEventListener(eventName, (event) =>{
            event.preventDefault()
            event.stopPropagation()
            let dt = event.dataTransfer;
            let files = dt.files;

            let fileName = files[0].name

            fileLoad.innerText = fileName;

        }, false)
    })

}
