
export const photosFetched = photos => ({
    type: 0,
    photos: photos,
});

export const photosUploaded = photos => ({
    type: 1,
    photos: photos,
});

export const updateUploadedPhoto = uploadedPhoto => ({
    type: 2,
    uploadedPhoto: uploadedPhoto,
});

export const deleteUploadedPhoto = publicId => ({
    type: 3,
    publicId: publicId,
});