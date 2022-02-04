export const getText = (file) => {

    var data = new FormData()
    data.append('file', file)

    return fetch(`${process.env.REACT_APP_VOICE_TO_TEXT_APP_URL}/text`, {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
}